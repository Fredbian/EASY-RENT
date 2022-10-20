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


/**
 * mutation AddRoom($image: String, $location: String, $price: Int, $totalRooms: Int, $parkingSpace: Int, $isShareBill: Boolean, $withFurniture: Boolean, $description: String, $ownerEmail: String, $ownerContact: Int, $createdAt: String) {
  addRoom(image: $image, location: $location, price: $price, totalRooms: $totalRooms, parkingSpace: $parkingSpace, isShareBill: $isShareBill, withFurniture: $withFurniture, description: $description, ownerEmail: $ownerEmail, ownerContact: $ownerContact, createdAt: $createdAt) {
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

{
  "username": "testuser",
  "email": "testuser@mail.com",
  "password": "testuser",
  "image": "a",
  "location": "b",
  "price": 10,
  "totalRooms": 2,
  "parkingSpace": 3,
  "isShareBill": true,
  "withFurniture": true,
  "description": "abcd",
  "ownerEmail": "testuser@mail.com",
  "ownerContact": 123456789,
  "createdAt": null
}
 */



/**
 * mutation UpdateRoom($roomId: ID!, $image: String, $price: Int, $parkingSpace: Int, $isShareBill: Boolean, $withFurniture: Boolean, $description: String, $ownerContact: Int) {
  updateRoom(roomId: $roomId, image: $image, price: $price, parkingSpace: $parkingSpace, isShareBill: $isShareBill, withFurniture: $withFurniture, description: $description, ownerContact: $ownerContact) {
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

{
  "roomId": "634293a9cd66b6115ca3d2f3",
  "image": "a1",
  "price": 20,
  "parkingSpace": 4,
  "isShareBill": false,
  "withFurniture": false,
  "description": "efg",
  "ownerContact": 5555555
}
 */