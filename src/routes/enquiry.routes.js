import express from "express";
import { createEnquiry } from "../controllers/enquiry.controller.js";

const router = express.Router();

// PUBLIC: submit enquiry
router.post("/", createEnquiry);

export default router;
