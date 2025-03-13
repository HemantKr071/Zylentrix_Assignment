import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoutes from './src/routes/userRoutes.js';


dotenv.config();
const app = express();

const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB")
    } catch (error){
        throw error;
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected");
})

app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(3000,()=> {
    connect();
    console.log("App is listening on port 3000");
})