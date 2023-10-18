import mongoose from "mongoose";
import { AgentData } from "../agent";
import { PSAData } from "../psa";
import {
  Addenda17Data,
  AgencyDisclosureData,
  EscalationData,
  InspectionData,
  MultipleBrokersData,
} from "../addenda";

type temp = mongoose.InferSchemaType<typeof OfferBundleSchema>;
type OfferBundleData = Omit<temp, "addenda" | "userId" | "psa"> & {
  userId: AgentData;
  psa: PSAData;
  addenda: Record<string, object | null>;
};

type DehydratedOfferBundleData = Omit<temp, "addenda" | "userId" | "psa"> & {
  userId: string;
  id?: string; // is this even used?
  psa: string;
  addenda: Record<string, object | null>;
  pdfPath: string;
};

type AddendaToDataMap = {
  "17": Addenda17Data;
  "21": PSAData;
  "27": object;
  "28": object;
  "34": object;
  "35": InspectionData;
  "35E": EscalationData;
  "36": object;
  "41": object;
  "42": AgencyDisclosureData;
  "42A": MultipleBrokersData;
  "22k": OfferBundleData;
};

const OfferBundleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent",
    required: true,
  },
  pdfPath: {
    type: String,
    required: true,
  },
  psa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PSA",
    default: null,
  },
  addenda: {
    "22K": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22K",
      default: null,
    },
    "22J": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22J",
      default: null,
    },
    "22E": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22E",
      default: null,
    },
    "17": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda17",
      default: null,
    },
    "22A": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22A",
      default: null,
    },
    "21": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PSA",
      default: null,
    },
    "28": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PSA",
      default: null,
    },
    "22D": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22D",
      default: null,
    },
    "35": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda35",
      default: null,
    },
    "35E": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda35E",
      default: null,
    },
    "42": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda42",
      default: null,
    },
    "42A": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda42A",
      default: null,
    },
    "22T": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22T",
      default: null,
    },
    "22AD": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22AD",
      default: null,
    },
  },
});

const OfferBundleModel = mongoose.model<OfferBundleData>(
  "OfferBundle",
  OfferBundleSchema
);

type OfferBundleDocument = OfferBundleData & mongoose.Document;

export {
  OfferBundleSchema,
  OfferBundleModel,
  OfferBundleDocument,
  OfferBundleData,
  DehydratedOfferBundleData,
  AddendaToDataMap,
};
