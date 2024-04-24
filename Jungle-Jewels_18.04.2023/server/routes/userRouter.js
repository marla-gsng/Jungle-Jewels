const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModel.js");

userRouter.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.json(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("email password");
    if (!user) {
      return res.status(400).json("User not found");
    }
    if (password !== user.password) {
      return res.status(400).json("Wrong password");
    }
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

userRouter.get("/logout", async (req, res) => {
  res.json("Logged out");
});

module.exports = userRouter;
