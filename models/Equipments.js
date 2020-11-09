const { Schema, model } = require("mongoose");

const EquipmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})