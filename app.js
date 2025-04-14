import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import {restrictToLoggedInUserOnly} from "./middlewares/auth.js"
import toDoRouter from "./routes/task.js";
import { connectMongoDb } from "./db-connection/connect.js";
import userRouter from "./routes/user.js";
import cors from "cors";
dotenv.config();


const PORT = 3000;
const app = express();
// middlewares
app.use(cors({
    origin: 'https://to-do-react-beta-flax.vercel.app/', // your frontend
    credentials: true
  }));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cookieParser());
// Data base connection
connectMongoDb(`mongodb+srv://ujjwal2000upadhyay:${process.env.PASSWORD}@task-list-db.ireb2st.mongodb.net/?retryWrites=true&w=majority&appName=task-list-db`)
.then(() => console.log("mongo db connected successfully"))
.catch((e) => console.log("Error in connecting mongoDb"));

// routes
app.use("/api/user" , userRouter);
app.use("/api/tasks" ,restrictToLoggedInUserOnly, toDoRouter);



app.get("/" , (req ,res) => {
    return res.json({msg : "Hey I am listening"});
})

app.listen(PORT , () => {
    console.log(`app is listening on port ${PORT}`)
});