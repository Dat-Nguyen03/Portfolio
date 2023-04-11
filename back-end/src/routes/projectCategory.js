import express from "express";
import {
  createCategory,
  getAllProjectCategory,
} from "../controllers/projectCategory";

const router = express.Router();
router.get("/project-category", getAllProjectCategory);
router.post("/project-category", createCategory);
export default router;
