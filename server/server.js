import express from "express";
import cors from "cors";

import * as dotenv from "dotenv";

import mongoose from "mongoose";

import dalleRoute from "./Routes/dalleRoute.js";
import postRoute from "./Routes/postRoute.js";

dotenv.config();

const server = express();

server.use(cors());

// server.use(express.json());
server.use(express.json({ limit: "50mb" }));

server.use("/api/v1/post", postRoute);
server.use("/api/v1/dalle", dalleRoute);

// const port = "http://localhost:8080";

const port = 3000;

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_CONNECTION);

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to Mongo!");
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
// mongoose.connection.on("error", () => {
//   console.log("error");
// });
