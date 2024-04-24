import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  profileImage: String,
  createdAt: Date,
});

const User = mongoose.model("User", userSchema);

export default User;
