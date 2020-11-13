const { Schema, model } = require("mongoose");

const BedSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  house_id: {
    type: String,
    required: true,
  },
});

module.exports = model("beds", BedSchema);