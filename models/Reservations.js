const { Schema, model } = require("mongoose");

const ReservationSchema = new Schema({
    arrival: {
        type: String,
        required: true
    },
    aeparture: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})