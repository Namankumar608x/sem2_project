// models/sportsModel.js
import mongoose from "mongoose";

// Define Sports Schema
const sportsSchema = new mongoose.Schema({
  _id: { type: Number, required: true }, // Using Number for _id
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: "Sports" },
  image: { type: String, required: true },
  author: { type: String, default: "Admin" },
  date_published: { type: Date, required: true },
  tags: { type: [String], default: [] }, // Array of strings
  user_submission: { type: Boolean, default: false },
});

// Create and export model
const Sports = mongoose.model("Sports", sportsSchema);
export default Sports;
