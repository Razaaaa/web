const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 20,
    },
    specialization: {
      type: String,
    },
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", DoctorSchema);