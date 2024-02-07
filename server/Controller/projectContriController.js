import express from 'express';
import projectContri from '../Modal/projectContriModal.js';
import jwt from 'jsonwebtoken';
import user from '../Modal/userModal.js';
const JWT_SECRET = "projectCollabApp";

const postProject=async(req,res)=>{
    try {
        const  {projectName,projectDescription,activeLink,projectDomain,projectTechStack}=req.body;
        const token=req.headers.authorization;
        if(!token){
            res.status(401).json({message:"Login to get access"})
        }
        const verified=jwt.verify(token,JWT_SECRET);
        if(!verified){
            res.status(401).json({message:"Not Authorized to post project"})
        }
        const checkUser=await user.find({email:verified.email});
        if(!checkUser){
            res.status(404).json({message:"User not found"})
        }
        const ownerName=checkUser[0].username;
        const ownerEmail=checkUser[0].email;
        const ownerGithubUsername=checkUser[0].githubUsername;
        const newProject=new projectContri({
            projectName,
            ownerName,
            ownerEmail,
            ownerGithubUsername,
            projectDescription,
            activeLink,
            projectDomain,
            projectTechStack
        })
        await newProject.save();
        res.status(201).json({message:"Project added successfully"})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const getProject=async(req,res)=>{
   try {
        const allProjects=await projectContri.find();
        if(!allProjects || allProjects.length===0){
            return res.status(404).json({message:"No projects found"})
        }
        res.status(200).json({projects:allProjects})
   } catch (error) {
        res.status(400).json({message:error.message})
   }
}
const myProjects=async(req,res)=>{
    try {
        const token=req.headers.authorization;
        if(!token){
            res.status(401).json({message:"Login to get access"})
        }
        const verified=jwt.verify(token,JWT_SECRET);
        const checkuser=await user.find({email:verified.email});
        const myProjects=await projectContri.find({ownerEmail:verified.email});
        if(!myProjects || myProjects.length===0){
            return res.status(404).json({message:"No projects found"})
        }
        res.status(200).json({projects:myProjects})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export {postProject,getProject,myProjects}