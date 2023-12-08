const mongoose = require("mongoose");
const signupModel = require("./signup.model")
const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: signupModel,
      required: true,
    },
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
