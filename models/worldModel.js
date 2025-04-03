import mongoose from "mongoose";

const worldNewsSchema = new mongoose.Schema({
    _id: { type: Number, required: true }, // Using Number for _id
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: "World" },
    image: { type: String, required: true },
    author: { type: String, default: "Admin" },
    date_published: { type: Date, required: true },
    tags: { type: [String], default: [] }, // Array of strings
    user_submission: { type: Boolean, default: false },
}, { collection: "world" });  // 👈 Explicitly set collection name

const WorldNews = mongoose.model("WorldNews", worldNewsSchema);

export default WorldNews;
