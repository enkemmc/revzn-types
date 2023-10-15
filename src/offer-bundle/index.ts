import mongoose from "mongoose";

export type OfferBundleData = {
  userid: string;
  id?: string;
  psa: string;
  addenda: Record<string, any>;
  pdfPath: string;
};

export const OfferBundleSchema = new mongoose.Schema({
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
    "27": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
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
    "34": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
      default: null,
    },
    "35": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda35",
      default: null,
    },
    "35W": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
      default: null,
    },
    "35E": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda35E",
      default: null,
    },
    "36": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
      default: null,
    },
    "41": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
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
    "22EF": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
      default: null,
    },
    "22T": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22T",
      default: null,
    },
    "22Y": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda",
      default: null,
    },
    "22AD": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Addenda22AD",
      default: null,
    },
  },
});

export type OfferBundleDocument = OfferBundleData & mongoose.Document;
