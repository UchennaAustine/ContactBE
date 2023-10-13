import mongoose, { Schema } from "mongoose";
import { iUserData } from "../config/interfaces";

const userSchema = new Schema<iUserData>(
  {
    contactName: {
      type: String,
      required: true,
    },
    contactAvatar: {
      type: String,
      toUpperCase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 11,
    },

    contactCategory: {
      type: String,
      required: true,
      toLowerCase: true,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<iUserData>("users", userSchema);
