import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb+srv://mohitom2002:PzKQvvHeZEqCeYyw@cluster0.flzxxkr.mongodb.net/?retryWrites=true&w=majority')
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;