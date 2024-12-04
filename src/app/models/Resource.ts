// models/Resource.ts
import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  category: String,
  tags: [String],
  likes: Number,
  dateAdded: Date,
  iconName: String,
});

export const Resource =
  mongoose.models.Resource || mongoose.model("Resource", ResourceSchema);
