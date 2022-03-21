// Init
const { Schema, model } = require("mongoose");

// Tier Schema
const tierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "services",
    },
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = model("tiers", tierSchema);
