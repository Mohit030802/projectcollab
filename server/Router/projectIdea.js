import express from 'express';
import { showIdead,addIdead,myIdeas } from "../Controller/projectIdeaController.js";
import authmiddleware from '../auth/auth.js';


const porjectIdeadRouter=express.Router();

porjectIdeadRouter.get("/allIdeas",showIdead);
porjectIdeadRouter.post("/addIdea",authmiddleware,addIdead)
porjectIdeadRouter.get("/myIdeas",authmiddleware,myIdeas)

export default porjectIdeadRouter;