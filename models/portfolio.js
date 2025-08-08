// const mongoose = require("mongoose");
import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    heading: { type: String },
    category: [{ type: String }],
    tagline: { type: String },
    // tags: [{ type: String }],
    description: { type: String },
    masterFloorImage: { type: String },
    panelFloorImage: { type: String  },
    mapImage: { type: String },
    renderingImage: { type: String },
    additionalImage: { type: String },
    challenge: { type: String },
    solution: { type: String}, 
    value: {type: String},
    // solutionImage: { type: String },
    // CLIENT INFORMATION
    clientName: {type:String},
    location:{type: String},
    date:{type:String},
    // Value:{type:String},
    role:{type:String}
  },
  { timestamps: true }
);

export const portfolio =
  mongoose.models.portfolio || mongoose.model("portfolio", portfolioSchema);