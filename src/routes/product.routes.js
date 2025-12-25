import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product.controller.js";
import { adminAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", adminAuth, createProduct);
router.get("/", getAllProducts);

export default router;
