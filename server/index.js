import express from 'express'
import connectDB from './db/db.js'
import projectContriRouter from './Router/projectContri.js'
import userRouter from './Router/userRouter.js'
import cors from 'cors'
import porjectIdeadRouter from './Router/projectIdea.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
// DB Connection 
connectDB()
const app=express()
const PORT=3000
// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
// cors
app.use(cors())

// Routers
app.use('/user',userRouter)
app.use('/projectContri',projectContriRouter)
app.use('/ideas',porjectIdeadRouter)



app.listen(PORT,()=>{
    console.log(`Server is ruuning on port ${PORT}`)
})