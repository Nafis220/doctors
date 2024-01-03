const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://doctorPortal:asiqueassignment@cluster0.k6eedbn.mongodb.net/doctorPortal?retryWrites=true&w=majority"
    );
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
