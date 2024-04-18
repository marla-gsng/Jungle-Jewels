import { Router } from "express";
import Plant from "../models/plantModel.js";

const plantRouter = Router();

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
    const plant = await Plant.findById(id);
    res.send(plant);
  } catch (err) {
    res.json(err);
  }
});

plantRouter.post("/plants", async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    res.json(plant);
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
