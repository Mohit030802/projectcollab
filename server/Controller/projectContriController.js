import express from 'express';
import projectContri from '../Modal/projectContriModal.js';

const postProject=async(req,res)=>{
    res.send("You can post your project here")
}
const getProject=async(req,res)=>{
    res.send("You can find projects here")
}

export {postProject,getProject}