import mongoose from "mongoose";

const projectIdeaSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    ownerName:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    ownerEmail:{
        type:String,
    },
    ownerGithubUsername:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    domain:{
        type:String,
        required:true,
    },
    techStack:{
        type:String,
        required:true,
    },
    createdOn:{
        type:Date,
        default:Date.now
    }
})

const projectIdea=mongoose.model('projectIdea',projectIdeaSchema)

export default projectIdea;