const { Schema, model } = require("mongoose");

const EquipmentSchema = new Schema({
  house_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("equipment", EquipmentSchema);
