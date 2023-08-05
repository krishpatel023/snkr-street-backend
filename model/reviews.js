import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    ReviewId: {
      type: String,
      required: true,
      unique: true,
    },
    Review: {
      type: String,
      required: true,
    },
    ReviewBy: {
      type: String,
      required: true,
    },
    ReviewOf: {
      type: String,
      required: true,
    },
    Rating: {
      type:Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);