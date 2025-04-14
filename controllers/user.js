import { v4 as uuidV4} from "uuid"; 
import {User} from "../models/user.js";
import { setUser } from "../service/auth.js";

export const handleUserSignUp = async (req ,res) => {
    const {email , password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            msg : "Email and Password required"
        });
    }
    await User.create({
        email,
        password
    });
    return res.json({msg : "User created Successfully"});
} 

export const handleUserLogin = async (req ,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            msg : "Email and Password required"
        });
    }
    const user = await User.findOne({email ,password});
    if(!user){
        return res.status(400).json({msg : "invalid email or password"});
    }else{
        const sessionId = uuidV4();
        setUser(sessionId , user);
        res.cookie("uid", sessionId);
        return res.status(200).json({msg : "You are successfully logged in" , id : user._id})
    }
} 