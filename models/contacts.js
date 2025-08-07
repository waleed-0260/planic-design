const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:{type: String},
    email:{type:String},
    phone:{type:String},
    message:{type: String }
}, { timestamps: true } );

export const contact =
  mongoose.models.contact || mongoose.model("contact", contactSchema);