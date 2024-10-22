import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
},
  description: { 
    type: String,
    required: true, 
    maxlength: 50, 
},
  createdAt: {
    type: Date,
    default: Date.now,
},
});

export const Notes = mongoose.model("Notes", notesSchema);
