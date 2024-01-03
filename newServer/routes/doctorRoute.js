const {
  addDoctor,
  getAllDoctor,
  searchedDoctors,
} = require("../controllers/doctorController");
const uploadFile = require("../middleware/fileUpload");

const router = require("express").Router();

router.post("/addDoctor", uploadFile, addDoctor);
router.get("/getAllDoctor", getAllDoctor);
router.get("/searchedDoctors", searchedDoctors);
module.exports = router;
