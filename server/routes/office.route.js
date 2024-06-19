import express from "express";
import {
  addOffice,
  deleteOffice,
  getOfficeDetails,
  getOffices,
  updateOffice,
} from "../controllers/office.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getOffices);
router.get("/:id", getOfficeDetails);
router.post("/", verifyToken, addOffice);
router.put("/:id", verifyToken, updateOffice);
router.delete("/:id", verifyToken, deleteOffice);

export default router;
