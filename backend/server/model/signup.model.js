const mongoose = require("mongoose");

const SignSchema = new mongoose.Schema(
    {
      fname: {
        type: String,
        required: true,
        trim: true,
        max: 20,
      },
      lname: {
        type: String,
        required: true,
        trim: true,
        max: 20,
      },
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
      age: {
        type: Number,
        required: true,
        trim: true,
        max: 100,
      },
   
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("SignUp", SignSchema);