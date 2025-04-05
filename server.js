import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectMongo.js";
import newsRoutes from "./routes/newsApi.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// 👉 Enable CORS
app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:8080"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

// 👉 __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve all static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// ✅ Optional: Root route for direct browser hits
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ API Routes
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/auth", authRoutes);

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
