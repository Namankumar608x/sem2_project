import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectMongo.js";
import newsRoutes from "./routes/newsApi.js";
import cors from "cors";

dotenv.config();
connectDB(); // ✅ Ensures MongoDB connection

const app = express();
app.use(express.json());

// Enable CORS to allow frontend requests
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:8080"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

// 📢 Use News API Routes
app.use("/api/v1/news", newsRoutes);

app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
