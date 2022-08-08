const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const authRouter = require("./router/auth.routes");
const fileRouter = require("./router/file.routes");
const corsMiddleware = require("./middleware/cors.middleware");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.static("static"));
app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
