import { gql } from "@apollo/client";

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            password
            rooms {
                _id
                image
                location
                price
                totalRooms
                parkingSpace
                isShareBill
                withFurniture
                description
                ownerEmail
                ownerContact
                createdAt
            }
        }
    }
`

export const QUERY_ROOMS = gql`
    query rooms($username: String) {
        rooms(username: $username) {
            _id
            image
            location
            price
            totalRooms
            parkingSpace
            isShareBill
            withFurniture
            description
            ownerEmail
            ownerContact
            createdAt
        }
    }
`

export const QUERY_SINGLE_ROOM = gql`
    query room($id: ID!) {
        room(_id: $id) {
            _id
            image
            location
            price
            totalRooms
            parkingSpace
            isShareBill
            withFurniture
            description
            ownerEmail
            ownerContact
            createdAt
        }
    }
`