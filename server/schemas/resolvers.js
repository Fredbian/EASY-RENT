const { AuthenticationError } = require("apollo-server-express");
const { User, Room } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // check if user exist
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('rooms')

                return userData
            }
            throw new AuthenticationError('Not logged in')
        },
        // get all rooms
        rooms: async (parent, { username }) => {
            const params = username ? { username } : {}
            return Room.find(params).sort({ createdAt: -1 })
        },
        // get one room by ID
        room: async (parent, { roomId }) => {
            return Room.findOne({ _id: roomId })
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })
            // check if user exists with email and credentials
            if (!user) {
                throw new AuthenticationError('No user found with this email address')
            }

            // check password
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addRoom: async (parent, { image, location, price, totalRooms, parkingSpace, isShareBill, withFurniture, description, ownerEmail, ownerContact, createdAt }) => {
            const room = await Room.create({ image, location, price, totalRooms, parkingSpace, isShareBill, withFurniture, description, ownerEmail, ownerContact, createdAt })

            await User.findOneAndUpdate(
                { email: ownerEmail },
                { $addToSet: { rooms: room._id } },
                { new: true}
            )

            return room
        },
        removeRoom: async (parent, { roomId }) => {
            return Room.findOneAndDelete({ _id: roomId })
        },
        updateRoom: async (parent, { roomId, image, price, parkingSpace, isShareBill, withFurniture, description, ownerContact }) => {

            const updatedRoom = {
                image : image,
                price : price,
                parkingSpace : parkingSpace,
                isShareBill : isShareBill,
                withFurniture : withFurniture,
                description : description,
                ownerContact : ownerContact
            }

            const room = await Room.findByIdAndUpdate({ _id: roomId }, updatedRoom, {new: true})                      

            return room
        }
    }
}


module.exports = resolvers