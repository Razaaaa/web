const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        max: 15,
      },
   
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("LogIn", LoginSchema);