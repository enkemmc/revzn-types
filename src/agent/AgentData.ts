import mongoose from "mongoose";

export type AgentData = {
  id?: string;
  listings: string[];
  name: string;
  email: string;
};

export const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      lowercase: true,
      validate: {
        validator: (v: any) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      required: [true, "Email is required"],
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default: null,
    },
    primaryColor: {
      type: String,
    },
    secondaryColor: {
      type: String,
    },
    logoImage: {
      type: String,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    socialId: {
      type: String,
    },
    loginType: {
      type: String,
    },
    token: {
      type: String,
    },
    listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
      },
    ],
  },
  { timestamps: true },
);

export type AgentDocument = AgentData & mongoose.Document;
