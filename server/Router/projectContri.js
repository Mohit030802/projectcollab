import express from 'express';
const projectContriRouter=express.Router();
import { postProject,getProject,myProjects } from "../Controller/projectContriController.js";
import authmiddleware from '../auth/auth.js';

projectContriRouter.get('/getProjects',getProject);
projectContriRouter.post('/postProject',authmiddleware,postProject);
projectContriRouter.get('/myProjects',authmiddleware,myProjects);


export default projectContriRouter;
