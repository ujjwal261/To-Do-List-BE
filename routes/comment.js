import express from "express";
import { addCommentToProject, deleteComment, getAllCommentsByProjectId } from "../controllers/comment.js";

const router = express.Router();

// routes for the feedback
router.get("/get-all-comments/:id" , getAllCommentsByProjectId);
router.post("/add-comment/:id", addCommentToProject);
router.delete("/delete-comment/:id" , deleteComment)

export default router;