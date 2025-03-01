

// first we import express
const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const connectODB = require("./config/db");
const authRoute = require("./routes/auth.route");
const adminRoute = require("./routes/admin.route");


app.use(express.json());

app.use("/auth", AuthRoute)


app.use("/admin",adminRoute)
app.listen(PORT, async () => {
  try {
    await connectODB()

  } catch (err) {
    console.log(err, "error")
  }
  console.log("server started")
})