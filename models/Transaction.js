const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  category: {
    type: String,
    trin: true,
    required: true,
  },
  particular: {
    type: String,
    trim: true,
    required: [true, "Please add particular"],
  },
  amount: {
    type: Number,
    required: [true, "Please add amount"],
  },
  transDate: {
    type: Date,
    required: [true, "Please add date"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
