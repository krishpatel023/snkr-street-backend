import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    OrderId: {
      type: String,
      required: true,
      unique: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
    Amount: {
      type:Number,
      required: true,
    },
    ModeOfPayment: {
      type: String,
      required: true,
    },
    OrderPlacedDate:{
        type:Date,
        required: true,
    },
    OrderDeliveredDate:{
        type:Date,
        required: false
    },
    Products:[]
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);