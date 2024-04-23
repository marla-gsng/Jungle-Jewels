import { Router } from "express";
import express from "express";
import Plant from "../models/plantModel.js";

const plantRouter = express.Router();

plantRouter.get("/api/plants", (req, res) => {
  res.json(plantsData);
});

plantRouter.get("/plants", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.json(err);
  }
});

plantRouter.get("/plants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const plant = await Plant.findById((p) => p.id === id);
    res.send(plant);
  } catch (err) {
    res.json(err);
  }
});

plantRouter.post("/plants", async (req, res) => {
  console.log(req.body);
  try {
    const plant = await Plant.create(req.body);
    return res.json(plant);
  } catch (err) {
    res.json(err);
  }
});

plantRouter.put("/plants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const plant = await Plant.findByIdAndUpdate(id, req.body);
    res.json(plant);
  } catch (err) {
    res.json(err);
  }
});

plantRouter.delete("/plants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const plant = await Plant.findByIdAndDelete(id);
    res.json(plant);
  } catch (err) {
    res.json(err);
  }
});

export default plantRouter;
