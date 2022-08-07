const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./router/auth.routes");
const corsMiddleware = require("./middleware/cors.middleware");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

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
