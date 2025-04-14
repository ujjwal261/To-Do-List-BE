import { getUser } from "../service/auth.js";
export const restrictToLoggedInUserOnly = async (req ,res , next) => {
    const userUid = req.cookies?.uid;

    if(!userUid){
        return res.status(440).json({msg : 
            "You are not authorized"
        });
    }
    const user = getUser(userUid);
    if(!user) return res.status(400).json({msg : 
        "You are not authorized"
    });
    req.user = user;
    next();
}