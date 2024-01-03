const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register callback
const registerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    const payload = { ...req.body, role: "user" };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });

    res.cookie(process.env.COOKIE_NAME, token, {
      maxage: process.env.JWT_TIMEOUT,
      httpOnly: true,
      signed: true,
    });
    await newUser.save();

    res
      .status(201)
      .send({ message: "Register Sucessfully", token: token, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

// login callback
const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid EMail or Password", success: false });
    }
    const payload = {
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });

    res.cookie(process.env.COOKIE_NAME, token, {
      maxage: process.env.JWT_TIMEOUT,
      httpOnly: true,
      signed: true,
    });

    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

module.exports = { loginController, registerController };
