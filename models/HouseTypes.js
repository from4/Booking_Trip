const { Schema, model } = require("mongoose");

const HouseTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:false
    }
})