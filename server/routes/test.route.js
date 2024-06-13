import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";

const router = express.Router();

router.post("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

router.post("/should-be-admin", verifyToken, shouldBeAdmin);

export default router;
