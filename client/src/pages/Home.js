import React from 'react'
import RoomCardHomePage from '../components/RoomCardHomePage'
// import Auth from '../utils/auth'
import { useQuery } from '@apollo/client'
import { QUERY_ROOMS } from '../utils/queries'
import { SimpleGrid } from '@chakra-ui/react'

const Home = () => {

    const { loading, data, refetch } = useQuery(QUERY_ROOMS)
    const rooms = data?.rooms || []
    refetch()
    return (
                <main>
                    <div>
                        <div>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <SimpleGrid minChildWidth={'350px'} columns={rooms?.length > 0 ? [1, 2, 3] : [1]} spacing={5}>
                                    <RoomCardHomePage rooms={rooms} />
                                </SimpleGrid>
                            )}
                        </div>
                    </div>
                </main>
    )
}

export default Home;