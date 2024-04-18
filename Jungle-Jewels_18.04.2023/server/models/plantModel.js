import mongoose, { Schema } from "mongoose";

const plantSchema = new Schema({
  name: String,
  description: String,
  care: String,
  price: Number,
});

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;
