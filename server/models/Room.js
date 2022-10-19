// import mongoose and moment
const { Schema, model } = require("mongoose")
const moment = require('moment')

const roomSchema = new Schema(
    {
        image: {
            type: String,
            // default: 
        },
        location: {
            type: String,
            // required: true
        },
        price: {
            type: Number,
            required: true
        },
        totalRooms: {
            type: Number,
        },
        parkingSpace: {
            type: Number,
        },
        isShareBill: {
            type: Boolean,
            default: true,
        },
        withFurniture: {
            type: Boolean,
            default: true,
        },
        description: {
            type: String,
        },
        ownerEmail: {
            type: String,
            required: true
        },
        ownerContact: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
)

const Room = model('Room', roomSchema)

module.exports = Room