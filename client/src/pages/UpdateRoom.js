import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Link,
    Input,
    InputGroup,
    Stack,
    Textarea,
    HStack,
    Radio,
    RadioGroup,
    VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ROOMS, QUERY_ME } from '../utils/queries'
import { UPDATE_ROOM } from '../utils/mutations';
import Auth from '../utils/auth'
import { useParams } from 'react-router-dom';
import { Link as ReactLink } from 'react-router-dom';

import { QUERY_SINGLE_ROOM } from '../utils/queries';
// redirect -----
import { useNavigate  } from "react-router-dom";

const styles = {
    messageStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 600,
        color: 'red'
    },
    errorStyle: {
        fontWeight: '700',
        color: 'red'
    },
    linkStyle: {
        color: 'blue'
    }
}


export default function UpdateRoomForm() {
    // redirect -----
    const navigate = useNavigate()

    const { roomId } = useParams()

    const { loading, data } = useQuery(QUERY_SINGLE_ROOM, {
        variables: { roomId: roomId }
    })

    const room = data?.room || {}

    const [formData, setFormData] = useState({
        price: room.price || 0,
        parkingSpace: room.parkingSpace || 0,
        isShareBill: room.isShareBill || '',
        withFurniture: room.withFurniture || '',
        description: room.description || '',
        ownerContact: room.ownerContact || '',
    })

    const [updateRoom, { error }] = useMutation(UPDATE_ROOM, { variables: { roomId: roomId } }, {
        refetchQueries: [
            {query: QUERY_ROOMS},
            {query: QUERY_ME},
        ]
        
        
        // cache
        // update(cache, { data: { updateRoom } }) {
        //     try {
        //         const roomsQuery = cache.readQuery({ query: QUERY_ROOMS })

        //         if (!roomsQuery) {
        //             const rooms = roomsQuery.rooms
        //             cache.writeQuery({
        //                 query: QUERY_ROOMS,
        //                 data: { rooms: [updateRoom, ...rooms] }
        //             })
        //         }
        //     } catch (e) {
        //         console.error(e)
        //     }

        //     const meQuery = cache.readQuery({ query: QUERY_ME })

        //     if (!meQuery) {
        //         const me = meQuery.me
        //         cache.writeQuery({
        //             query: QUERY_ME,
        //             data: { me: { ...me, rooms: [...me.rooms, updateRoom] } }
        //         })
        //     }
        // }
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try {
            const { data } = await updateRoom({
                variables: {
                    roomId: roomId,
                    ...formData,
                    price: Number(formData.price),
                    parkingSpace: Number(formData.parkingSpace),
                },
            })

            setFormData({
                price: '',
                parkingSpace: '',
                isShareBill: '',
                withFurniture: '',
                description: '',
                ownerContact: '',
            })

            //redirect ----
            const path = '/dashboard'
            navigate(path)
            // window.location.assign('/dashboard')

        } catch (err) {
            console.error(err)
        }
    }


    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            {Auth.loggedIn() ? (
                <form
                    id='updateRoomForm'
                   
                >
                    <Flex
                        bg={'gray.100'}
                        align="center"
                        justify="center"
                        css={{
                            backgroundAttachment: 'fixed',
                        }}
                    >
                        <Box
                            borderRadius="lg"
                            m={{ base: 5, md: 16, lg: 10 }}
                            p={{ base: 5, lg: 16 }}
                        >

                            <Box>
                                <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                                    <Heading
                                        fontSize={{
                                            base: '4xl',
                                            md: '5xl',
                                        }}>
                                        Update your room info
                                    </Heading>

                                    <Stack
                                        spacing={{ base: 10, md: 30, lg: 50 }}
                                        direction={{ base: 'column', md: 'row' }}>

                                        <Box
                                            // boxSize={'500'}
                                            w={[300, 400, 700]}
                                            bg={'white'}
                                            borderRadius="lg"
                                            p={8}
                                            color={'gray.700'}
                                            shadow="base">
                                            <VStack spacing={5}>

                                                <FormControl isRequired>
                                                    <FormLabel>Price per Week</FormLabel>
                                                    <InputGroup>
                                                        <Input
                                                            type="number"
                                                            name="price"
                                                          
                                                        />
                                                    </InputGroup>
                                                </FormControl>

                                                <FormControl isRequired>
                                                    <FormLabel>Parking Space Nubmer</FormLabel>
                                                    <InputGroup>
                                                        <Input
                                                            type="number"
                                                            name="parkingSpace"
                                                            
                                                            
                                                        />
                                                    </InputGroup>
                                                </FormControl>

                                                <FormControl isRequired>
                                                    <FormLabel>Owner Phone Number</FormLabel>
                                                    <InputGroup>
                                                        <Input
                                                            type="text"
                                                            name="ownerContact"
                                                            
                                                           
                                                        />
                                                    </InputGroup>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>With Furniture or Not</FormLabel>
                                                    {/* <InputGroup>
                                                        <Input
                                                            maxLength={300}
                                                            minLength={3}
                                                            type="text"
                                                            name="withFurniture"
                                                            value={formData.withFurniture}
                                                            onChange={handleInputChange}
                                                        />
                                                    </InputGroup> */}
                                                    <RadioGroup>
                                                        <HStack spacing={'24px'}>
                                                            <Radio value={'YES'} name="withFurniture">YES</Radio>
                                                            <Radio value={'NO'} name="withFurniture">NO</Radio>
                                                        </HStack>
                                                    </RadioGroup>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>Share Bill or Not</FormLabel>
                                                    {/* <InputGroup>
                                                        <Input
                                                            type="text"
                                                            name="isShareBill"
                                                            value={formData.isShareBill}
                                                            onChange={handleInputChange}
                                                        />
                                                    </InputGroup> */}
                                                    <RadioGroup>
                                                        <HStack spacing={'24px'}>
                                                            <Radio value={'YES'} name="isShareBill">YES</Radio>
                                                            <Radio value={'NO'} name="isShareBill">NO</Radio>
                                                        </HStack>
                                                    </RadioGroup>
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel>Description</FormLabel>
                                                    <Textarea
                                                        name="description"
                                                        rows={6}
                                                        resize="none"
                                                        
                                                        
                                                    />
                                                </FormControl>

                                                <Button
                                                    px={'20'}
                                                    colorScheme="blue"
                                                    type='submit'
                                                    form='updateRoomForm'
                                                    bg="blue.400"
                                                    color="white"
                                                    _hover={{
                                                        bg: 'blue.500',
                                                    }}
                                                >
                                                    Submit
                                                </Button>                                            

                                            </VStack>
                                        </Box>
                                    </Stack>
                                </VStack>
                            </Box>
                        </Box>
                    </Flex>
                </form>
            ) : (
                <p>
                    You need to be logged in to see this page. Please{' '}
                    <Link as={ReactLink} to="/login">login</Link> or <Link as={ReactLink}  to="/signup">signup.</Link>
                </p>
            )}
        </>

    )
}