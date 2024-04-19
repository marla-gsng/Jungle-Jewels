import mongoose, { Schema } from "mongoose";

const plantSchema = new Schema({
  name: String,
  description: String,
  care: String,
  difficultyLevel: Number,
  rarity: String,
});

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;
