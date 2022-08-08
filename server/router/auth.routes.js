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

/**
 * @swagger
 * tags:
 *   name: auth
 *   description: The authorization routes
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a user
 *     tags: [auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: The registration completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: The registration failed
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [auth]
 *     security: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: The registration completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     diskSpace:
 *                       type: number
 *                     usedSpace:
 *                       type: number
 *       400:
 *         description: The registration failed
 */

/**
 * @swagger
 * /auth/auth:
 *   get:
 *     summary: Return a user
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: The authentication completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     diskSpace:
 *                       type: number
 *                     usedSpace:
 *                       type: number
 *               security:
 *                 jwt: []
 *       401:
 *         description: Unauthorized
 */
