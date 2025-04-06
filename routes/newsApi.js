import express from "express";
import Sports from "../models/sportsModel.js"; 
import News from "../models/worldModel.js";
import TechnologyNews from "../models/technologyModel.js"; 
import PoliticsNews from "../models/politicsModel.js"; 
import FinanceNews from "../models/financeModel.js";
import EntertainmentNews from "../models/entertainmentModel.js"; 
import MainPageNews from "../models/mainPageModel.js";
// ✅ Correct model name

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
 * 📌 Render Sports News (EJS Page)
 */
router.get("/sports-page", async (req, res) => {
  try {
    const sportsNews = await Sports.find({ category: "Sports" }).sort({ _id: 1 });
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




export default router;
