const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 15 },
  usedSpace: { type: String, default: 0 },
  avatar: { type: String },
  files: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("User", User);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         email:
 *           type: string
 *           description: The user's email
 *         diskSpace:
 *           type: Number
 *           description: How much disk space has user
 *         usedSpace:
 *           type: Number
 *           description: How many user used space
 *         avatar:
 *           type: string
 *           description: The user's avatar
 *         files:
 *           type: ObjectId
 *           description: The file _id which user owns
 */
