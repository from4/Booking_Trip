const { Schema, model } = require("mongoose");

const ReservationSchema = new Schema({
    id_house: {
        type: String,
        required: true
    },
    arrival: {
        type: Date,
        required: true
    }, 
    departure: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
},
{ timestamps: true })
module.exports = model("reservations", ReservationSchema);