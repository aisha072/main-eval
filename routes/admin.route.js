
// GET /admin/users → View all users
// GET /admin/users/:id → View a specific user
// DELETE /admin/users/:id → Delete a user
// GET /admin/appointments → View all appointments
// DELETE /admin/appointments/:id → Delete an appointment
// GET /admin/reports → Download a CSV file containing system statistics
const express =require("express")
const userModel = require("../models/usersmodel")
const appointmentModel = require("../models/appoinment.model")
const adminRoute = express.Router()
// Users


adminRoute.get("admin/users", async(req,res)=>{
  
    const userindb = await userModel.find(req.body.email)

    res.send("get all users")
})
adminRoute.get("/sdmin/users/:id" , async (req,res)=>{
//     get user by their id's
const userid = req.params.id;
const useridinDb = await userModel.findById(req.params.id)
if(userid==useridinDb){
    res.send("user found")
}else{
    res.send("user not found please register")
}
 })
 adminRoute.delete("/admin/users/:id", async (req,res)=>{
    // if userid and userid presebt in db matched then delete user
    const userid = req.params.id;
const useridinDb = await userModel.findById(req.params.id)
if(userid==useridinDb){
const deleteid = await userModel.findByIdAndDelete(userindb.id)
}else{
    res.send("user not found ")
}
 })
//  appointments
 adminRoute.get("/admin/appointments", async (req,res)=>{
  const user = await appointmentModel.find(req.body.email)
  res.send("all appoinments found")
 })

 adminRoute.delete("/admin/appointments/:id", async (req,res)=>{
    // if userid and userid presebt in db matched then delete user
    const userid = req.params.id;
const useridinDb = await appointmentModel.findById(req.params.id)
if(userid==useridinDb){
const deleteid = await appointmentModel.findByIdAndDelete(userindb.id)
res.send("appoinment succesfully deleted")
}else{
    res.send("user not found ")
}
 })


module.exports=adminRoute