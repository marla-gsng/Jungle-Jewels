import mongoose, { Schema } from "mongoose";

const plantSchema = new Schema({
  name: String,
  description: String,
  care: String,
  difficultyLevel: String,
  rarity: String,
  image: String,
});

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;
