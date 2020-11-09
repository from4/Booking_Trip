const { Schema, model } = require("mongoose");

const HouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    nb_rooms: {
        type: Nmuber,
        required: true
    },
    disponibility: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rule_id: {
        type: Number,
        required: true
    },
    total_note: {
        type: Number,
        required: true
    },
    average_note: {
        type: Number,
        required: true
    }
})