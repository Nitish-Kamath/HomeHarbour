import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// express is used for creating

// backend server

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => console.log("server is running on port number 3000"));
