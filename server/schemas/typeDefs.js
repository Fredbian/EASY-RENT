const { gql } = require("apollo-server-express");

// ！means that the field is non-nullable
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        rooms: [Room]    
    }

    type Room {
        _id: ID
        image: String
        location: String
        price: Int
        totalRooms: Int
        parkingSpace: Int
        isShareBill: Boolean
        withFurniture: Boolean
        description: String
        ownerEmail: String
        ownerContact: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        rooms: [Room]!
        room(roomId: ID!): Room 
    }

    type Mutation {
        login(email: String!, password: String!): Auth

        addUser(username: String!, email: String!, password: String!): Auth

        addRoom(image: String, location: String, price: Int, totalRooms: Int, parkingSpace: Int, isShareBill: Boolean, withFurniture: Boolean, description: String, ownerEmail: String, ownerContact: String, createdAt: String): Room

        updateRoom(roomId: ID!, image: String, price: Int, parkingSpace: Int, isShareBill: Boolean, withFurniture: Boolean, description: String, ownerContact: String): Room

        removeRoom(roomId: ID!): Room
    }
`

module.exports = typeDefs;