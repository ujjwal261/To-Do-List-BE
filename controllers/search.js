import { Project } from "../models/project.js";
import { User } from "../models/user.js";

export const handleSearchQuery = async(req,res) => {
    try{
        const {q} = req.query;
        if(!q) return res.status(400).json({msg : "Query is required"});
        const userResult = await User.find({
            email : {
                $regex : q , $options : 'i'
            }
        }).select('email _id');

        const projectResult = await Project.find({
            title : {
                $regex : q , $options : 'i'
            }
        }).populate('user' , 'email');

        return res.status(200).json({user : userResult , project : projectResult});
    }catch(err){
        console.log("Error in searching the query" , err);
        return res.status(500).json({msg: "Error in searching the result"});
    }
}