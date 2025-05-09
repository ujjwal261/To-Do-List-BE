import { Comment } from "../models/comment.js";

export const getAllCommentsByProjectId = async(req, res) => {
    try{
        const projectId = req.params.id;
        const comments = await Comment.find({project : projectId});
        return res.status(200).json({comments});
    }catch(err){
        console.error("Error in fetching the comments" , err);
        return res.status(500).json({error : "Failed to fetech Projects"});
    }
}

export const addCommentToProject = async(req ,res) => {
    try{
        const text = req.body.text;
        console.log("text",text)
        if(!text){
            return res.status(400).json({msg : "Please write something"});
        }
        const user = req.user._id
        const project = req.params.id
        const newComment = await Comment.create({text,project,user});
        return res.status(201).json({msg : "comment added successfully" , comment : newComment});
    }catch(err){
        console.error("Error in adding the comment" , err);
        return res.status(500).json({error : "Failed to add comment"});
    }
}

export const deleteComment = async(req ,res) => {
    try{
        const comment_id = req.params.id;
        const deleteComment = await Comment.findByIdAndDelete(comment_id);
        if(!deleteComment){
            return res.status(404).json({msg : "comment is not found"});
        }else{
            return res.status(200).json({msg : "comment is deleted successfully"});
        }
    }catch(err){
        console.error("Error in deleting the comment" , err);
        return res.status(500).json({error : "Failed to delete comment"});
    }
}