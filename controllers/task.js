import Task from "../models/task.js";

export const handleAddTask = async(req ,res) => {
    try{
        const {task_description , task_date , status} = req.body;
        const createdBy = req.user._id;
        if(!task_description || !task_date){
            return res.status(400).json({msg : "Task details and date required"});
        }
        const newTask = await Task.create({task_description , task_date , status , createdBy});
        return res.status(202).json({msg : "Task created successfully" , task : newTask});
    }catch{
        console.error("Error in creating the task:", error.message);
        return res.status(500).json({ error: "Failed to create task" });
    }
}

export const handleUpdateStatus = async(req , res) => {
    try{
        const { status} = req.body;
        const id = req.params.id
        const updatedTask = await Task.findByIdAndUpdate(id , {status});
        if(!updatedTask) return res.status(404).json({error : "Task not found"});
        return res.status(200).json({ message: "Status updated", task: updatedTask });
    }catch(err){
        console.error("Error in updating the status:", err.message);
        return res.status(500).json({ error: "Failed to update task" });
    }
}

export const handleGetAllTask = async(req ,res) => {
    try{
        console.log("get all task is calling")
        const _id = req.user._id;
        console.log(_id)
        const tasks = await Task.find({createdBy : _id});
        console.log(tasks);
        return res.status(200).json({tasks});
    }catch(err){
        console.error("Error in fetching all tasks:", err.message);
        return res.status(500).json({ error: "Failed to fetch tasks" });
    }
}

export const handleDeleteTask = async(req ,res) => {
    try{
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);
        if(!deletedTask) return res.status(404).json({error : "Task was not found"});
        return res.status(200).json({msg : "Task deleted successfully"})
    }catch(err){
        console.error("Error in deleting the task:", err.message);
        return res.status(500).json({ error: "Failed to delete task" });
    }
}

