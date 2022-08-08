const { Schema, model, ObjectId } = require("mongoose");

const File = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: "" },
  date: { type: Date, default: Date.now() },
  user: { type: ObjectId, ref: "User" },
  parent: { type: ObjectId, ref: "File" },
  children: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("File", File);

/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       required:
 *         - name
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The file name
 *         type:
 *           type: string
 *           description: The file type
 *         accessLink:
 *           type: string
 *           description: The link via file can be accessed
 *         size:
 *           type: Number
 *           description: The file size
 *         path:
 *           type: string
 *           description: The file path
 *         date:
 *           type: Date
 *           description: Date in which file was published
 *         user:
 *           type: ObjectId
 *           description: The file owner's _id
 *         parent:
 *           type: string
 *           description: The parent directory of the file
 *         children:
 *           type: ObjectId[]
 *           description: The children of the directory
 */
