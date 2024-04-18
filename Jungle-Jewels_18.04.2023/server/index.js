import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import plantRouter from "./routes/plantRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(plantRouter);

mongoose.connect(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Testing testing 1, 2, 3!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
