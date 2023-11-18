import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    code: String,
    expireIn: Number,
  },
  { timestamps: true }
);

export default mongoose.model("otp", otpSchema);
