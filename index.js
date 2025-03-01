

// first we import express
const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const mongoose =require("mongoose");
const connectODB = require("./config/db");
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("this is get route")
})

  app.listen(PORT, async()=>{
    await connectODB()
    console.log("server started")
  })