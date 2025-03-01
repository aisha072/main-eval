const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobileNumber: String,
    password: String,
    role: { type: String, Enum: ["admin", "doctor", "patient"] },
    specialization: { type: String, Enum: ["nervers", "heart", "lungs", "skin"] },
    availableDays: {
        type: Array, Enum: [Sun, Mon, Tue, Wed, Thu, Fri, Sat]

    }
})

const userModel = mongoose.model("users",Userschema);
module.exports=userModel