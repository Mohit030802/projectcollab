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
    Category:{
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
        type:Date,
        required:true,
    },
    Domain:{
        type:String,
        required:true,
    },
    TechStack:{
        type:String,
        required:true,
    }
})

const projectIdea=mongoose.model('projectIdea',projectIdeaSchema)

export default projectIdea;