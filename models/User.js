const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"]
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    //not required fields
    birthday: {
      type: String,
      required: false
    },
    sex: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: false
    },
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);
