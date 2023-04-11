import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: String,
  category: String,
  imgUrl: String,
  description: String,
  technologies: [String],
  siteUrl: String,
});

export default mongoose.model("Project", projectSchema);
