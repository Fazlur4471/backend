import express from "express";
import { adminAuth } from "../middleware/auth.middleware.js";
import {
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/admin.controller.js";
import { Enquiry } from "../models/index.js";

const router = express.Router();

/**
 * GET all enquiries
 */
router.get("/enquiries", adminAuth, async (req, res) => {
  const enquiries = await Enquiry.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.json(enquiries);
});

/**
 * UPDATE enquiry status
 */
router.patch("/enquiries/:id/status", adminAuth, updateEnquiryStatus);

/**
 * DELETE enquiry
 */
router.delete("/enquiries/:id", adminAuth, deleteEnquiry);

export default router;
