import express from 'express'
import connectDB from './db/db.js'
import projectContriRouter from './Router/projectContri.js'
// DB Connection 
connectDB()
const app=express()
const PORT=3000

// Routers

app.use('/projectContri',projectContriRouter)


app.listen(PORT,()=>{
    console.log(`Server is ruuning on port ${PORT}`)
})