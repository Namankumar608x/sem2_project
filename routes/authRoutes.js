import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

/**
 * 🟢 Register User
 */
router.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    // ✅ Include username in response
    res.status(200).json({ message: "Registration successful", username: newUser.username });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
});

/**
 * 🔵 Login User (by email)
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // ✅ Include username in response for frontend
    res.status(200).json({ message: "Login successful", username: user.username });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login." });
  }
});

export default router;
