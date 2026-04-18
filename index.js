const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/jobtracker")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Serve frontend
app.use(express.static(path.join(__dirname, "frontend")));

// ROUTES

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "login.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dashboard.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "register.html"));
});

// API
app.use("/jobs", jobRoutes);

// START
app.listen(5000, () => {
  console.log("Server running → http://localhost:5000/");
});