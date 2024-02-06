const JWT_SECRET = "projectCollabApp";
import jwt from "jsonwebtoken";
import projectIdea from "../Modal/projectIdeadModal.js";
import user from "../Modal/userModal.js";

const showIdead = async (req, res) => {
  try {
    const allIdeas = await projectIdea.find();
    if (!allIdeas || allIdeas.length === 0) {
      return res.status(404).json({ message: "No project ideas found" });
    }
    res.status(200).json({ ideas: allIdeas });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addIdead = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ message: "Login to get access" });
    }
    const verified = jwt.verify(token, JWT_SECRET);
    const checkuser = await user.find({ email: verified.email });
    if (!verified) {
      res.status(401).json({ message: "Token not verified" });
    }
    const ownerEmail = checkuser[0].email;
    const ownerName = checkuser[0].username;
    const ownerGithubUsername = checkuser[0].githubUsername;
    const { title, description, category, duration, domain, techStack } =
      req.body;
    const newIdea = new projectIdea({
      title,
      description,
      category,
      ownerName,
      ownerEmail,
      ownerGithubUsername,
      duration,
      domain,
      techStack,
    });
    await newIdea.save();
    res.status(201).json({ message: "Idea added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const myIdeas=async(req,res)=>{
    try {
        const token=req.headers.authorization;
        if(!token){
            res.status(401).json({message:"Login to get access"})
        }
        const verified=jwt.verify(token,JWT_SECRET);
        const checkuser=await user.find({email:verified.email});
        if(!verified){
            res.status(401).json({message:"Token not verified"})
        }
        const myUserIdea=await projectIdea.find({ownerEmail:checkuser[0].email});

        if(!myUserIdea || myUserIdea.length===0){
            return res.status(404).json({message:"No project ideas found"})
        }
        res.status(200).json({ideas:myUserIdea})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { showIdead, addIdead,myIdeas};
