import express from "express";
import { handleSearchQuery } from "../controllers/search.js";

const router = express.Router();

router.get("/",handleSearchQuery);

export default router;