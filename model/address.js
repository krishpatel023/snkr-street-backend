import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    AddressId: {
      type: String,
      required: true,
      unique: true,
    },
    Title:{
      type: String,
      required: true,
    },
    Street: {
      type: String,
      required: true,
    },
    Area: {
      type:String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    City:{
        type:String,
        required: true,
    },
    Pincode:{
        type:Number,
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Address", AddressSchema);