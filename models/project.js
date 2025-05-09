import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true
    },
    link : {
        type : String,
        default : ''
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
} , {
    timestamps : true
});

export const Project = mongoose.model('Project' , projectSchema);