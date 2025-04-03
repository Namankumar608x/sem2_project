import express from "express";
import Sports from "../models/sportsModel.js"; 
import News from "../models/worldModel.js";
import TechnologyNews from "../models/technologyModel.js"; 

const router = express.Router();

/** 
 * 📢 Welcome Route 
 */
router.get("/", (req, res) => {
  res.send("📢 Welcome to the News API!");
});

/** 
 * 📌 Fetch Sports News (JSON Response)
 */
router.get("/sports", async (req, res) => {
  try {
    const sportsNews = await Sports.find({ category: "Sports" });
    res.json(sportsNews);
  } catch (error) {
    console.error("Error fetching sports news:", error);
    res.status(500).json({ message: "Error fetching sports news." });
  }
});

/** 
 * 📌 Render Sports News (EJS Page)
 */
router.get("/sports-page", async (req, res) => {
  try {
    const sportsNews = await Sports.find({ category: "Sports" });
    res.render("sports", { news: sportsNews });
  } catch (error) {
    console.error("Error rendering sports page:", error);
    res.status(500).send("Error rendering sports page.");
  }
});

/** 
 * 📌 Fetch Technology News
 */
router.get("/technology", async (req, res) => {
  try {
    const techNews = await TechnologyNews.find();  // ✅ Fixed model usage
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
    const worldNews = await News.find({ category: "World" });
    res.json(worldNews);
  } catch (error) {
    console.error("Error fetching world news:", error);
    res.status(500).json({ message: "Error fetching world news." });
  }
});

/** 
 * 📌 Fetch Finance News (Static Response)
 */
router.get("/finance", (req, res) => {
  res.json({
    category: "Finance",
    message: "💸 Finance news data will be displayed here.",
  });
});

export default router;
