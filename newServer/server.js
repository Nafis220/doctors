const express = require("express");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();
app.use(cors());
//middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_NAME));
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoute"));
app.use("/api/v1/appoinment", require("./routes/appoinmentRoute"));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(`Server Running in production Mode on port ${port}`.bgCyan.white);
});
