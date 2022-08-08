const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");
const fileController = require("../controllers/fileController");

router.post("", authMiddleware, fileController.createDir);
router.get("", authMiddleware, fileController.getFiles);
router.post("/upload", authMiddleware, fileController.uploadFile);
router.get("/download", authMiddleware, fileController.downloadFile);
router.delete("/", authMiddleware, fileController.deleteFile);
router.get("/search", authMiddleware, fileController.searchFile);
router.post("/avatar", authMiddleware, fileController.uploadAvatar);
router.delete("/avatar", authMiddleware, fileController.deleteAvatar);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: files
 *   description: The file's routes
 */

/**
 * @swagger
 * /files:
 *   post:
 *     summary: Create a new file
 *     tags: [files]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *           security:
 *             jwt: []
 *     responses:
 *       201:
 *         description: The file created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files:
 *   get:
 *     summary: Return all files
 *     tags: [files]
 *     parameters:
 *       - in: query
 *         name: dirId
 *         schema:
 *           type: string
 *         description: The directory id
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: The sort type
 *     responses:
 *       200:
 *         description: The authorization succeeded
 *         content:
 *           application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/File'
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files/upload:
 *   post:
 *     summary: Upload a new file
 *     tags: [files]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               parent:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: The authorization succeeded
 *         content:
 *           application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/File'
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files/download:
 *   get:
 *     summary: Download a file
 *     tags: [files]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The file id
 *     responses:
 *       200:
 *         description: The download was successful
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files:
 *   delete:
 *     summary: Delete a file
 *     tags: [files]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The file id
 *     responses:
 *       200:
 *         description: The deleting was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files/search:
 *   get:
 *     summary: Search a files
 *     tags: [files]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: true
 *         description: The search string
 *     responses:
 *       200:
 *         description: The search was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/File'
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files/avatar:
 *   post:
 *     summary: Adding a users' avatar
 *     tags: [files]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: The avatar's adding was successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /files/avatar:
 *   delete:
 *     summary: Deleting a users' avatar
 *     tags: [files]
 *     responses:
 *       200:
 *         description: The user's avatar was deleted successful
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/File'
 *         security:
 *           jwt: []
 *       401:
 *         description: Unauthorized
 */
