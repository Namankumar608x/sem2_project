import express from "express";
import Sports from "../models/sportsModel.js"; // Corrected path


const router = express.Router();

// ✅ Fetch API route for sports (JSON data)
router.get("/sports", async (req, res) => {
  try {
    const sportsNews = await Sports.find({ category: "Sports" });
    res.json(sportsNews);
  } catch (error) {
    console.error("Error fetching sports news:", error);
    res.status(500).send("Error fetching sports news.");
  }
});

// ✅ Render EJS route for sports
router.get("/sports-page", async (req, res) => {
  try {
    const sportsNews = await Sports.find({ category: "Sports" });
    res.render("sports", { news: sportsNews });
  } catch (error) {
    console.error("Error fetching sports news:", error);
    res.status(500).send("Error rendering sports page.");
  }
});

// Other sample routes
router.get("/", (req, res) => {
  res.send("📢 Welcome to the News API!");
});

router.get("/finance", (req, res) => {
  res.json({
    category: "Finance",
    message: "💸 Finance news data will be displayed here.",
  });
});

router.get("/technology", (req, res) => {
  res.json({
    category: "Technology",
    message: "💻 Technology news data will be displayed here.",
  });
});

router.get("/world", (req, res) => {
  res.json({
    category: "World",
    message: "🌍 World news data will be displayed here.",
  });
});

export default router;
