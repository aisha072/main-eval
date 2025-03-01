

const express = require("express");
const userModel = require("../models/usersmodel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AuthRoute = express.Router();
var jwt = require('jsonwebtoken');
const secretkey = process.env.SECRECT_KEY

AuthRoute.post("/auth/register", (req,res)=>{
    // POST /auth/register → Register a new user (admin, doctor, patient)
    
    try{
        if(userpresent){
            // if user present or already register then go directly login page
            res.send("please login ")
        }
        else{
            // if user not prsent or register then cratate user with hashe password
    //  register new user
            const myPlaintextPassword =req.body.password;
            // const {email, password} =req.body;
            bcrypt.hash(myPlaintextPassword, saltRounds, async function(err, hash) {
                // Store hash in your password DB.
            
               if(err){
                res.status(404).json({msg : "something went worng"})
               }else{
                // everythhing well then hashing the paswrod and save in db send register succesfully.
                 const {email, password} =req.body;
                 console.log()
                await userModel.create({...req.body,password:hash})
                res.status(201).json({msg: "register succesfully"})
               }
    
    
            });
        }
    }catch(err){
        console.log("something went wrong plaese try again")
    }
  
   
})


// for login
AuthRoute.post("/auth/login", (req,res)=>{
    // POST /auth/register → Register a new user (admin, doctor, patient)

    
    try{
        if(userpresent){
        //    if user presnt then compare the password coming form body and  and hashed password present in db they have a token to access further features
           const myPlaintextPassword =req.body.password;
           const userindb = userModel.findOne({email,password})
           const hashedpassword = userModel.findOne({password: req.body.password})
        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            // result == true
            if(err){
                res.status(404).json({msg:"something wend wrong Please login again"})
            }else{
                if(result){
                    var token = jwt.sign({ userid : userindb.id ,role : userindb.role}, process.env.secretkey);
                    res.send("login succesflly",token)

                }else{
                    res.send("wrong password")
                }
                    // create a token
                    

                
            }
        });
    
        }
        else{
           res.send("no user found please register")
        }
    }catch(err){
        console.log("something went wrong plaese try again")
    }
  
   
})




module.exports = AuthRoute;