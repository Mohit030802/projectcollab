import user from "../Modal/userModal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET="projectCollabApp"
// Register a new user
const createUser=async(req,res)=>{
    try {
        const {username,email,password,githubUsername,bio,skills,profilePic}=req.body;
        const hashedPassword=await bcrypt.hash(password,12)
       
        const newUser=new user({username,email,password:hashedPassword,githubUsername,bio,skills,profilePic})

        await newUser.save();
        res.status(201).json({message:"User created successfully"})

    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}

// login a user

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const checkuser=await user.findOne({email})
        if(!checkuser){
            res.status(404).json({message:"User not found"})
        }
        const isPasswordCorrect=await bcrypt.compare(password,checkuser.password)
        if(!isPasswordCorrect){
            res.status(400).json({message:"Invalid credentials"})
        }
        const token=jwt.sign({email:checkuser.email},JWT_SECRET,{expiresIn:"1h"})
        await res.setHeader('authorization', `${token}`);
       
        res.status(200).json({message:"User logged in successfully",token})
        
        
    } catch (error) {
        res.status(500).json({message:error.message })
    }
}

const tokenIsValid=async(req,res)=>{
    try {
        const token=req.headers.authorization;
        if(!token){
            res.status(401).json({message:'Token not provided'})
        }
        const verified=jwt.verify(token,JWT_SECRET)
        // console.log("object")
        // console.log(token)
        if(!verified){
            res.status(401).json({message:'Token not verified'})
        }
        const checkuser=await user.find({email:verified.email})
        console.log(checkuser[0].email)
        res.json({user:checkuser[0].email})

    } catch (error) {
        res.status(500).json({message:"Invalid token"})
    }
}

const getUserInfo=async(req,res)=>{
    try {
        const token=req.headers.authorization;
        if(!token){
            res.status(401).json({message:'Token not provided'})
        }
        const verified=jwt.verify(token,JWT_SECRET)
        
        if(!verified){
            res.status(401).json({message:'Token not verified'})
        }
        const checkuser=await user.find({email:verified.email})
        if (!checkuser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user information
        return res.json(checkuser);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export {createUser,loginUser,tokenIsValid,getUserInfo}