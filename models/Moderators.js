const { Schema, model } = require("mongoose");

//superadmin
const ModeratorSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})