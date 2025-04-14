import express from "express";
import { handleAddTask, handleDeleteTask, handleGetAllTask, handleUpdateStatus } from "../controllers/task.js";

const router = express.Router();

router.get("/get-all-tasks" , handleGetAllTask);
router.delete("/delete-task/:id" , handleDeleteTask);
router.patch("/update-status/:id" , handleUpdateStatus);
router.post("/add-task" , handleAddTask);

export default router;