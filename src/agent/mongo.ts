import mongoose from "mongoose";
import { ListingData } from "../listing";

// type AgentData = {
//   id?: string;
//   name?: string | null;
//   email: string;
//   password?: string;
//   image?: string | null;
//   primaryColor?: string;
//   secondaryColor?: string;
//   logoImage?: string | null;
//   isDeleted?: boolean;
//   socialId?: string;
//   loginType?: string;
//   token?: string;
//   listings: ListingData[];
// };
type temp = mongoose.InferSchemaType<typeof AgentSchema>;
type AgentData = Omit<temp, "listings"> & {
  listings: ListingData[];
};
type DehydratedAgentData = Omit<temp, "listings"> & {
  listings: string[];
};

const AgentSchema = new mongoose.Schema(
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
