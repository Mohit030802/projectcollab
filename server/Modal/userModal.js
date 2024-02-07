import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    githubUsername:{
        type:String,
        required:true,
        unique:true,
    },
    bio:{
        type:String,
        required:true,
    },
    skills:{
        type:String,
    },
    profilePic:{
        type:String,
    }
})

const user=mongoose.model('user',userSchema)

export default user;