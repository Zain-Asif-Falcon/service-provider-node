// Init
const { Schema, model } = require("mongoose");

// Service Schema
const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = model("services", serviceSchema);
