import mongoose from "mongoose";

const entertainmentNewsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: "entertainment" },
  image: { type: String, required: true },
  author: { type: String, default: "Admin" },
  date_published: { type: Date, required: true },
  tags: { type: [String], default: [] },
  user_submission: { type: Boolean, default: false },
}, { collection: "entertainment" });  // Optional: your MongoDB collection name

const EntertainmentNews = mongoose.model("EntertainmentNews", entertainmentNewsSchema);
export default EntertainmentNews;
