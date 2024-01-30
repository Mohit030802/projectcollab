import express from 'express';
const projectContriRouter=express.Router();
import { postProject,getProject } from "../Controller/projectContriController.js";

projectContriRouter.post('/postProject',postProject);
projectContriRouter.get('/getProjects',getProject);

export default projectContriRouter;
