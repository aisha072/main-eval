
// patientId: Reference to User (patient)
// doctorId: Reference to User (doctor)
// appointmentDateTime: DateTime
// symptoms: String
// fees: Number (updated by doctor after appointment)
// prescription: String (updated by doctor after appointment)
// isDiagnosisDone: Boolean (updated by doctor after appointment)

const mongoose = require("mongoose");

const appointmentschema = new mongoose.Schema({
   
    patientId: {type:mongoose.Schema.Types.ObjectId,ref:"user.patient"},
    doctorId: {type:mongoose.Schema.Types.ObjectId,ref:"user.doctor"},
    appointmentDateTime: DateTime(),
    symptoms: String,
    fees: Number ,
    prescription: String, 
    isDiagnosisDone: Boolean 
})

const appointmentModel = mongoose.model("appointment", appointmentschema );
module.exports=appointmentModel