import express from 'express'
import connectDB from './db/db.js'
import projectContriRouter from './Router/projectContri.js'
import userRouter from './Router/userRouter.js'
import cors from 'cors'

// DB Connection 
connectDB()
const app=express()
const PORT=3000
// Middlewares
app.use(express.json());
// cors
app.use(cors())
// Routers
app.use('/user',userRouter)
app.use('/projectContri',projectContriRouter)



app.listen(PORT,()=>{
    console.log(`Server is ruuning on port ${PORT}`)
})