
// GET /admin/users → View all users
// GET /admin/users/:id → View a specific user
// DELETE /admin/users/:id → Delete a user
// GET /admin/appointments → View all appointments
// DELETE /admin/appointments/:id → Delete an appointment
// GET /admin/reports → Download a CSV file containing system statistics
const express =require("express")
const adminRoute = express.Router()


module.exports=adminRoute