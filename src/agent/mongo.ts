import mongoose from "mongoose";
import { ListingData } from "../listing";

type temp = mongoose.InferSchemaType<typeof AgentSchema>;

type AgentData = Omit<temp, "listings"> & {
  _id: string;
  listings: ListingData[];
};

type DehydratedAgentData = Omit<temp, "listings"> & {
  listings: string[];
};

const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Agent",
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
      default: "https://www.revzn.com/default-user-pic.svg",
    },
    logoImage: {
      type: String,
      default: "https://www.revzn.com/REVZN.svg",
    },
    brokerageImage: {
      type: String,
      default: "https://www.revzn.com/default-brokerage-logo.png",
    },
    primaryColor: {
      type: String,
      default: "#eaf4ae",
    },
    secondaryColor: {
      type: String,
      default: "#aa8ced",
    },
    agentCompany: {
      type: String,
      default: "Company Name",
    },
    brokerageName: {
      type: String,
      default: "Brokerage Name",
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
  { timestamps: true }
);

type AgentDocument = AgentData & mongoose.Document;
const AgentModel = mongoose.model<AgentData>("Agent", AgentSchema);

export {
  AgentData,
  AgentDocument,
  AgentSchema,
  AgentModel,
  DehydratedAgentData,
};
