const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  degree: {
    type: String,
    required: [true, "email is require"],
  },
  designation: {
    type: String,
    required: [true, "designation is require"],
  },
  department: {
    type: String,
    required: [true, "department is require"],
  },
  avatar: {
    type: String,
    required: [true, "avatar is require"],
  },
  division: {
    type: String,
    enum: [
      "Dhaka",
      "Rajshahi",
      "Khulna",
      "Barisal",
      "Chattogram",
      "Mymensingh",
      "Sylhet",
      "Rangpur",
    ],
    required: [true, "Division is required"],
  },
  available: {
    type: [String],
    enum: [
      "07:00am - 10:00am",
      "11:00am - 02:00pm",
      "03:00pm - 06:00pm",
      "07:00pm - 10:00pm",
    ],
    require: true,
  },
});

const doctorModel = mongoose.model("doctor", doctorSchema);

module.exports = doctorModel;
