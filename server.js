const express = require("express");
const { default: mongoose, Schema } = require("mongoose");
const mongoose = require("mongoose");
require("dotenv").config;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongDB Connected"))
.catch(console.error("error connecting"))


const Resturant = mongoose.model("Resturant",({
    Name: String, 
    location: String, 
    cuisine: String, 
    rating: Number, 
    
},"Menu",{
    Name:String, 
    description:String,
    price:Number,
}));

app.get("/resturant",(req,res)=>res.status(201).json())


app.get("/",(req,res)=>res.send("server is running on port 5000"))
app.listen(process.env.PORT,()=>console.log("server is running on port 5000"))