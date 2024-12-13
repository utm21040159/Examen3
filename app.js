import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import test from "node:test";

dotenv.config(); 
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Se Conecto")
}).catch((error)=>{
    console.log("Pues noo")
})

const app = express();
app.use(cors());

app.listen(4000,()=>{
    console.log("Esta bien")
})


test();