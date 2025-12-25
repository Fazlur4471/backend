import express from "express";
import upload from "../middleware/upload.js";
import { uploadImage } from "../controllers/upload.controller.js";
import { adminAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/image",
  adminAuth,
  upload.single("image"),
  uploadImage
);

export default router;
