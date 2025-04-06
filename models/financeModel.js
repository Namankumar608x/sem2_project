import mongoose from "mongoose";

const financeNewsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: "finance" },
  image: { type: String, required: true },
  author: { type: String, default: "Admin" },
  date_published: { type: Date, required: true },
  tags: { type: [String], default: [] },
  user_submission: { type: Boolean, default: false },
}, { collection: "finance" });  // Optional: your MongoDB collection name

const FinanceNews = mongoose.model("FinanceNews", financeNewsSchema);
export default FinanceNews;
