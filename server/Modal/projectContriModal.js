import mongoose from 'mongoose'


const projectContriSchema=mongoose.Schema({
    projectName:{
        type:String,
        required:true,
        unqiue:true
    },
    ownerName:{
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
    projectDescription:{
        type:String,
        required:true,
    },
    activeLink:{
        type:String,
    },
    projectDomain:{
        type:String,
    },
    projectTechStack:{
        type:String,
    }

})

const projectContri=mongoose.model('projectContriSchema',projectContriSchema)

export default projectContri;