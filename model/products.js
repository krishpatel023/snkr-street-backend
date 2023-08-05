import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    ProductId: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Description:{
        type: String,
        required: true,
    },
    // Category: {
    //   type: String,
    //   required: true,
    // },
    Amount: {
      type:Number,
      required: true,
    },
    Image:{
      type: String,
      required: true,
    },
    Qty:[],
    Size:[]
  },
  { timestamps: true }
);
ProductSchema.index(
  {
    Name: "text",
    Description: "text"
  }
)
export default mongoose.model("Product", ProductSchema);