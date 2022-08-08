const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fileService = require("../services/fileService");
const File = require("../models/File");

class UserController {
  async registerUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with ${email} already exists` });
      }
      const user = new User({
        email: email,
        password: await bcrypt.hash(password, 10),
      });
      await user.save();
      await fileService.createDir(new File({ user: user.id, name: "" }));
      return res
        .status(201)
        .json({ message: `User ${user.email} has been registered` });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "authorization failed" });
    }
  }

  async loginUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: `User with ${email} does not exist` });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ message: `${password} is not a valid password` });
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN,
      });

      return res.status(200).json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpace: user.diskSpace,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "User not found" });
    }
  }

  async auth(req, res) {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRES_IN,
      });
      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpace: user.diskSpace,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        },
      });
    } catch (e) {
      console.log(e);
      res.send({ message: "Server error" });
    }
  }
}

module.exports = new UserController();
