const { Schema, model } = require("mongoose");

const HousesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    nb_rooms: {
        type: Number,
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

module.exports = model("houses", HousesSchema);