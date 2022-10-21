import React from 'react'
import RoomCard from '../components/RoomCard'
// import Auth from '../utils/auth'
import { useQuery } from '@apollo/client'
import { QUERY_ROOMS } from '../utils/queries'

const Home = () => {

    // create state for holding retured room data
    // const [searchedRooms, setSearchedRooms] = useState([])
    // create state for holding our search input data
    // const [searchInput, setSearchInput] = useState('')

    // const handleFormSubmit = (event) => {
    //     event.preventDefault()

    //     if(!searchInput) {
    //         return false
    //     }

    // }

    const { loading, data } = useQuery(QUERY_ROOMS)
    const rooms = data?.rooms || []

    return (
                <main>
                    <div>
                        <div>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <RoomCard rooms={rooms} />
                            )}
                        </div>
                    </div>
                </main>
    )
}

export default Home;