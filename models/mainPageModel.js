import mongoose from "mongoose";

const mainPageNewsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  date_published: { type: Date, required: true },
  tags: { type: [String], default: [] },
  category: { type: String, default: "main-page" },
});

// 💡 Explicitly set the collection name to "index"
const MainPageNews = mongoose.model("MainPageNews", mainPageNewsSchema, "index");

export default MainPageNews;
