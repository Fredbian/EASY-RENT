// with Chakra UI
import {
    Icon,
    Heading,
    Box,
    Center,
    List,
    ListItem,
    Image,
    Text,
    Stack,
    Button,
    Flex,
} from '@chakra-ui/react';
import { BiBed } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { REMOVE_ROOM } from "../utils/mutations"
import { useMutation } from "@apollo/react-hooks"
import Auth from '../utils/auth';
import { Link as ReactLink } from 'react-router-dom';


export default function RoomCardDashboard({ rooms }) {

    
     
    if (!rooms.length) {
        return <h3>No Room Info Yet!</h3>
    }


    return (
        <>
            {rooms && rooms.map(room => (
                <Center mx={6} py={6} key={room._id}>
                    <Box
                        maxW={'300px'}
                        w={'full'}
                        bg={'gray.300'}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Image
                            h={'200px'}
                            w={'full'}
                            // room.image
                            src={
                                room.image ? (room.image) : (
                                    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2016%2F12%2F12165535%2Fcreamy-white-living-room-1216_0.jpg'
                                )
                            }
                            objectFit={'cover'}
                        />

                        <Box p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    ${room.price} / Week
                                </Heading>
                                <Text fontSize="sm" color={'gray.550'}>
                                    {room.description}
                                </Text>
                            </Stack>


                            <Flex>
                                <Stack  pl={'5px'} >
                                    <Icon as={BiBed}  />
                                    <Text >
                                        {room.totalRooms}
                                    </Text>
                                </Stack>
                                <Stack  pl={'5px'} >
                                    <Icon as={BiCar}  />
                                    <Text >
                                        {room.parkingSpace}
                                    </Text>
                                </Stack>
                            </Flex>

                            <Box bg={'gray.50'} px={6} py={10}>
                                <List spacing={3}>
                                    <ListItem fontSize="sm">
                                        Location: {room.location}
                                    </ListItem>
                                    <ListItem fontSize="sm">
                                        Share Bill: {room.isShareBill}
                                    </ListItem>
                                    <ListItem fontSize="sm">
                                        With Furniture: {room.withFurniture}
                                    </ListItem>
                                    <ListItem fontSize="sm">
                                        Owner Email: {room.ownerEmail}
                                    </ListItem>
                                    <ListItem fontSize="sm">
                                        Owner Contact: {room.ownerContact}
                                    </ListItem>
                                    <ListItem fontSize="12px" fontWeight={600}>
                                        Post At: {room.createdAt}
                                    </ListItem>
                                </List>

                                <Stack mt={8} direction={'row'} spacing={4}>
                                    <Button
                                        as={ReactLink}
                                        to={
                                            `/updateroom/${room._id}`
                                        }
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'green.100'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _focus={{
                                            bg: 'gray.500',
                                        }}>
                                        Update
                                    </Button>
                                    <Button
                                        onClick={() => handleDeleteRoom(room._id)}
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        _focus={{
                                            bg: 'blue.500',
                                        }}>
                                        Delete
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Center>
            ))}
        </>
    );
}