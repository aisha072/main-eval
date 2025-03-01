

const mongoose = require("mongoose");
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL

const  connectODB = async ()=>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log("connect to DB")
    
    }catch(err){
        console.log(err,"error in connect to Db ")
    }
}
module.exports = connectODB;