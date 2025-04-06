import mongoose from "mongoose";

// Define the schema for politics news
const politicsNewsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: "politics" },
  image: { type: String, required: true },
  author: { type: String, default: "Admin" },
  date_published: { type: Date, required: true },
  tags: { type: [String], default: [] },
  user_submission: { type: Boolean, default: false },
}, { collection: "politics" });  // Optional: specify collection name

// Create the Mongoose model
const PoliticsNews = mongoose.model("PoliticsNews", politicsNewsSchema);

// Export the model correctly
export default PoliticsNews;

