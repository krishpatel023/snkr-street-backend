import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    phone: {
      type:Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    address:[{
        type:String,
    }],
    order:[{
      type:String,
  }]
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);