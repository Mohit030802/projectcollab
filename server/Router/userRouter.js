import express from 'express';
import { createUser,loginUser,tokenIsValid,getUserInfo} from '../Controller/userController.js';
import authmiddleware from '../auth/auth.js';
const userRouter=express.Router();


userRouter.post('/register', createUser)
userRouter.post('/login',loginUser)
userRouter.get('/tokenIsValid',tokenIsValid)
userRouter.get('/userInfo',authmiddleware,getUserInfo)


export default userRouter;