import mongoose from "mongoose";

const projectCategory = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  ],
});

export default mongoose.model("PrjectCategory", projectCategory);
