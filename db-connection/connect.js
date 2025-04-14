import mongoose from "mongoose"

export const connectMongoDb = async(url) => {
    try{
        return await mongoose.connect(`${url}`) ;
    }catch(err){
        console.log("Error in connecting to mongo DB");
        return err;
    } 
}