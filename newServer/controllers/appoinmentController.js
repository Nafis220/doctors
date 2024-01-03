const doctorModel = require("../models/doctorModel");
const appoinmentModel = require("../models/appoinmentModel");
const userModel = require("../models/userModels");
const addAppoinment = async (req, res) => {
  const { patientId, patientName, doctorId, doctorName, selectedSlot } =
    req.body;
  console.log(req.body);
  try {
    const doctor = await doctorModel.findOne({ _id: doctorId });
    const user = await userModel.findOne({ _id: patientId });

    if (doctor != null && user != null) {
      const appoinment = {
        patientId: patientId,
        patientName: patientName,
        doctorId: doctorId,
        doctorName: doctorName,
        selectedSlot: selectedSlot,
      };

      const newAppoinment = new appoinmentModel(appoinment);
      await newAppoinment.save();
      res.status(200).json({ message: "appoinment created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
};
const getAllAppoinemnt = async (req, res) => {
  try {
    const allAppoinments = await appoinmentModel.find();
    res.status(200).json({ Appoinments: allAppoinments });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};
const deleteAppoinment = async (req, res) => {
  const appoinmentId = req.query.appoinment;

  try {
    await appoinmentModel.deleteOne({ _id: appoinmentId });
    res.status(200).json({ message: "Appoinment Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};
module.exports = { addAppoinment, getAllAppoinemnt, deleteAppoinment };
