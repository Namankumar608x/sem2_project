import mongoose from "mongoose"; // ✅ Add this line
const technologyNewsSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: "Technology" },
    image: { type: String, required: true },
    author: { type: String, default: "Admin" },
    date_published: { type: Date, required: true },
    tags: { type: [String], default: [] },
    user_submission: { type: Boolean, default: false },
}, { collection: "technology" });  

const TechnologyNews = mongoose.model("TechnologyNews", technologyNewsSchema);
export default TechnologyNews;
