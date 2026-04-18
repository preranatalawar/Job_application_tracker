const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  date: String
});

module.exports = mongoose.model("Job", jobSchema);