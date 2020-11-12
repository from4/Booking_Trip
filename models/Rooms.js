const { Schema, model } = require("mongoose");

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  house_id: {
    type: String,
    required: true,
  },
});

module.exports = model("rooms", RoomSchema);