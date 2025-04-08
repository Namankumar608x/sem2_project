import express from "express";
import Sports from "../models/sportsModel.js"; 
import News from "../models/worldModel.js";
import TechnologyNews from "../models/technologyModel.js"; 
import PoliticsNews from "../models/politicsModel.js"; 
import FinanceNews from "../models/financeModel.js";
import EntertainmentNews from "../models/entertainmentModel.js"; 
import MainPageNews from "../models/mainPageModel.js";
import ContactMessage from "../models/contactModel.js"; 
import User from "../models/userModel.js"; 




const router = express.Router();

/** 
 * 📢 Welcome Route 
 */
router.get("/", (req, res) => {
  res.send("📢 Welcome to the News API!");
});

/** 
 * 📌 Fetch Sports News
 */
router.get("/sports", async (req, res) => {
  try {
    const sportsNews = await Sports.find({ category: "Sports" }).sort({ _id: 1 });
    res.json(sportsNews);
  } catch (error) {
    console.error("Error fetching sports news:", error);
    res.status(500).json({ message: "Error fetching sports news." });
  }
});



/** 
 * 📌 Fetch Technology News
 */
router.get("/technology", async (req, res) => {
  try {
    const techNews = await TechnologyNews.find().sort({ _id: 1 });
    res.json(techNews);
  } catch (error) {
    console.error("Error fetching technology news:", error);
    res.status(500).json({ message: "Error fetching technology news." });
  }
});

/** 
 * 📌 Fetch World News
 */
router.get("/world", async (req, res) => {
  try {
    const worldNews = await News.find({ category: "World" }).sort({ _id: 1 });
    res.json(worldNews);
  } catch (error) {
    console.error("Error fetching world news:", error);
    res.status(500).json({ message: "Error fetching world news." });
  }
});

/** 
 * 📌 Fetch Politics News
 */
router.get("/politics", async (req, res) => {
  try {
    const politicsNews = await PoliticsNews.find({ category: { $regex: /^politics$/i } }).sort({ _id: 1 });
    res.json(politicsNews);
  } catch (error) {
    console.error("Error fetching politics news:", error);
    res.status(500).json({ message: "Error fetching politics news." });
  }
});

/** 
 * 📌 Fetch Finance News
 */
router.get("/finance", async (req, res) => {
  try {
    const financeNews = await FinanceNews.find().sort({ _id: 1 });
    res.json(financeNews);
  } catch (error) {
    console.error("Error fetching finance news:", error);
    res.status(500).json({ message: "Error fetching finance news." });
  }
});

/** 
 * 📌 Fetch Entertainment News ✅
 */
router.get("/entertainment", async (req, res) => {
  try {
    const entertainmentNews = await EntertainmentNews.find().sort({ _id: 1 }); 
    res.json(entertainmentNews);
  } catch (error) {
    console.error("Error fetching entertainment news:", error);
    res.status(500).json({ message: "Error fetching entertainment news." });
  }
});
/** 
 * 🏠 Fetch Main Page News for index.html 
 */

router.get("/main-page", async (req, res) => {
  try {
    const mainPageNews = await MainPageNews.find().sort({ _id: 1 });
    res.json(mainPageNews);
  } catch (error) {
    console.error("Error fetching main page news:", error);
    res.status(500).json({ message: "Error fetching main page news." });
  }
});
import mongoose from "mongoose"; // ✅ Ensure this line is present at the top if not already

// 📌 Fetch a single article by category and id
router.get("/article/:category/:id", async (req, res) => {
  const { category, id } = req.params;

  let Model;
  switch (category.toLowerCase()) {
    case "world":
      Model = News;
      break;
    case "sports":
      Model = Sports;
      break;
    case "technology":
      Model = TechnologyNews;
      break;
    case "finance":
      Model = FinanceNews;
      break;
    case "entertainment":
      Model = EntertainmentNews;
      break;
    case "politics":
      Model = PoliticsNews;
      break;
    case "main-page":
      Model = MainPageNews;
      break;
    default:
      return res.status(400).json({ message: "Invalid category." });
  }

  try {
    const article = await Model.findById(Number(id)); // 👈 Convert to number
    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }
    res.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ message: "Error fetching article." });
  }
});


// 📩 Contact Form Submission
// 📩 Contact Form Submission - With Registered Email Check
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // ✅ Check if email is registered
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(401).json({ message: "Please use a registered email address." });
    }

    // ✅ Save the contact message
    const newMsg = new ContactMessage({ name, email, message });
    await newMsg.save();

    res.status(201).json({ message: "Message received successfully!" });
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ message: "Something went wrong." });
  }
});


export default router;
