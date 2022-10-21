import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_ROOM = gql`
  mutation addRoom($image: String, $location: String, $price: Int, $totalRooms: Int, $parkingSpace: Int, $isShareBill: Boolean, $withFurniture: Boolean, $description: String, $ownerEmail: String, $ownerContact: String, $createdAt: String) {
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
`

export const UPDATE_ROOM = gql`
  mutation updateRoom($roomId: ID!, $image: String, $price: Int, $parkingSpace: Int, $isShareBill: Boolean, $withFurniture: Boolean, $description: String, $ownerContact: String) {
    updateRoom(image: $image, price: $price, parkingSpace: $parkingSpace, isShareBill: $isShareBill, withFurniture: $withFurniture, description: $description, ownerContact: $ownerContact) {
        image
        price
        parkingSpace
        isShareBill
        withFurniture
        description
        ownerContact
    }
  }  
`

export const REMOVE_ROOM = gql`
  mutation removeRoom($roomId: String!) {
    removeRoom(roomId: $roomId) {
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
