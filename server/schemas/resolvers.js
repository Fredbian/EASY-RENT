const { AuthenticationError } = require("apollo-server-express");
const { User, Room } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Qurey: {
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

    }
}

module.exports = resolvers