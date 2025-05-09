import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project',
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
} , {
    timestamps : true
});

export const Comment = mongoose.model('Comment' , commentSchema);