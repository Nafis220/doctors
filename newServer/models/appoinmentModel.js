const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: [true, "Patient id is require"],
    },
    patientName: {
      type: String,
      required: [true, "Patient name is require"],
    },
    doctorId: {
      type: String,
      required: [true, "Doctor Id is require"],
    },
    doctorName: {
      type: String,
      required: [true, "Doctor name is require"],
    },
    selectedSlot: {
      type: String,
      required: [true, "Slot is required"],
    },
  },
  { timestamps: true }
);

const appoinmentModel = mongoose.model("appoinment", appoinmentSchema);

module.exports = appoinmentModel;
