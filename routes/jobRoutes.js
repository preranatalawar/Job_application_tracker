const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.post("/add", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.send("Job added");
});

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});
router.put("/:id", async (req, res) => {
  await Job.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

module.exports = router;