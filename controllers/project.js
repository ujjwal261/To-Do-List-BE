import { Project } from "../models/project.js";

export const handleAddProject = async(req ,res) => {
    try{
        const {title , description , link} = req.body;
        const user = req.user._id;
        if(!title || !description){
            return res.status(400).json({msg : "Project title and description is required"});
        }
        const newProject = await Project.create({title , description , link, user});
        return res.status(202).json({msg : "Project created successfully" , project : newProject});
    }catch(error){
        console.error("Error in creating the Project:", error.message);
        return res.status(500).json({ error: "Failed to create Project" });
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

export const handleGetAllProjects = async(req ,res) => {
    try{
        console.log("get all task is calling")
        const _id = req.user._id;
        console.log(_id)
        const projects = await Project.find({});
        console.log(projects);
        return res.status(200).json({projects});
    }catch(err){
        console.error("Error in fetching all projects:", err.message);
        return res.status(500).json({ error: "Failed to fetch projects" });
    }
}

export const handleDeleteProject = async(req ,res) => {
    try{
        const id = req.params.id;
        const deletedTask = await Project.findByIdAndDelete(id);
        if(!deletedTask) return res.status(404).json({error : "Project was not found"});
        return res.status(200).json({msg : "Project deleted successfully"})
    }catch(err){
        console.error("Error in deleting the project:", err.message);
        return res.status(500).json({ error: "Failed to delete project" });
    }
}

