// v1
import React from 'react'
import RoomCardDashboard from '../components/RoomCardDashboard'
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { QUERY_USER, QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { Button, Flex, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';

const styles = {
    messageStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 600,
        color: 'red'
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 700,
    },
    linkStyle: {
        color: 'blue'
    }

}


const Dashboard = () => {
    
    return (
        <div>
            <div className="flex-row justify-center mb-3">
                <h2 style={styles.titleStyle}>
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
                <Flex
                    h="10vh"
                    justifyContent="center"
                    alignItems="center"
                    bgColor={'green.100'}>
                    <Button
                        as={ReactLink}
                        to={'/addroom'}
                        px={8}
                        bg={'gray.900'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                    >
                        Post your room info
                    </Button>
                </Flex>

                <SimpleGrid columns={user?.rooms?.length > 0 ? [1, 2, 3] : [1]} spacing={5}>
                    <RoomCardDashboard
                        rooms={user.rooms}
                    />
                </SimpleGrid>
            </div>
        </div>
    );
};


export default Dashboard