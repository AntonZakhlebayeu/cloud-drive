const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");
const fileService = require("../services/fileService");
const File = require("../models/File");
const userController = require("../controllers/userController");

router.post("/register", [
  check("email", "Invalid email").isEmail(),
  check(
    "password",
    "Password must be at least 3 and no longer than 12."
  ).isLength({ min: 3, max: 12 }),
  userController.registerUser,
]);

router.post("/login", [
  check("email", "Invalid email").isEmail(),
  check(
    "password",
    "Password must be at least 3 and no longer than 12."
  ).isLength({ min: 3, max: 12 }),
  userController.loginUser,
]);

router.get("/auth", authMiddleware, userController.auth);

module.exports = router;
