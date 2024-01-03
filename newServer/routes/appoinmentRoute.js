const {
  addAppoinment,
  getAllAppoinemnt,
  deleteAppoinment,
} = require("../controllers/appoinmentController");

const router = require("express").Router();
router.post("/addAppoinment", addAppoinment);
router.get("/getAllAppoinemnt", getAllAppoinemnt);
router.delete("/deleteAppoinment", deleteAppoinment);
module.exports = router;
