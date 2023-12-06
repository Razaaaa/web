const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
      doctorname: {
        type: String,
        required: true,
        trim: true,
        max: 20,
      },
      consultationdate: {
        type: Date,
        required: true,
      },
      consultationtime: {
        type: String,
        required: true,
      },
      reason: {
        type: String,
        required: true,
        trim: true,
        max: 50,
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Order", OrderSchema);