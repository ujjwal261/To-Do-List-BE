import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task_description : {
        type : String,
        unique : true,
        required : true
    },
    task_date : {
        type : Date,
        required : true
    }, 
    status : {
        type : String,
        enum : ["pending" , "completed"],
        default : "pending"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
}, {
    timestamps : true
});

const Task = mongoose.model("Task" , taskSchema);

export default Task;