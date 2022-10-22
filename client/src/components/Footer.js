import {
    Box,
    Container,
    Button,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import LinkedIn from '../icons/linkedin.png'
import Github from '../icons/github.png'
import Facebook from '../icons/facebook_icon.png'
import React from 'react'


const imgStyle = {
    width: '40px',
    height: '40px',
}


export default function SmallCentered() {

    
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text fontSize="18" fontWeight="700">© 2022 Made with ❤️ by Fred Bian</Text>
                    <Stack direction={'row'} spacing={6}>
                        <Button colorScheme='blue'>Donate 5.00$</Button>
                        <Link label={'LinkedIn'} href={'https://www.linkedin.com/in/tao-bian-9aa137239/'} target="_blank">
                            <img src={LinkedIn} alt="LinkedIn" style={imgStyle}></img>
                        </Link>
                        <Link label={'Github'} href={'https://github.com/Fredbian?tab=repositories'} target="_blank">
                            <img src={Github} alt="Github" style={imgStyle}></img>
                        </Link>
                        <Link label={'Fackbook'} href={'https://www.facebook.com/profile.php?id=100074467428814'} target="_blank">
                            <img src={Facebook} alt="Facebook" style={imgStyle}></img>
                        </Link>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}