const doctorModel = require("../models/doctorModel");

const addDoctor = async (req, res) => {
  const newUser = new doctorModel(req.body);
  await newUser.save();

  try {
    res.status(201).json("Doctor's Profile created successfully");
  } catch (error) {
    console.log(error);
    if (req.body.avatar) {
      const absolutePath = path.join(
        `${__dirname}../../../images/doctorsImages/${req.body.avatar}`
      );
      fs.unlink(absolutePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err.message}`);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
  }
};
const searchedDoctors = async (req, res) => {
  const division = req.query.division;
  console.log(division);
  try {
    const doctors = await doctorModel.find({ division: division });
    res.status(200).json({ doctors: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json("Doctor not found");
  }
};
const getAllDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find().limit(4);
    res.status(200).json({ doctors: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json("Doctor not found");
  }
};
module.exports = { addDoctor, getAllDoctor, searchedDoctors };
