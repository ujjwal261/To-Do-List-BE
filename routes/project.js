import express from "express";
import { handleAddProject, handleDeleteProject, handleGetAllProjects, handleUpdateStatus } from "../controllers/project.js";

const router = express.Router();

router.get("/get-all-projects" , handleGetAllProjects);
router.delete("/delete-project/:id" , handleDeleteProject);
router.patch("/update-status/:id" , handleUpdateStatus);
router.post("/add-project" , handleAddProject);

export default router;