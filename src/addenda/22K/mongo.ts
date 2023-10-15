import mongoose from "mongoose";
import { FormCommonProps } from "../../common";
import { UtilityData } from "./parsed";

export const UtilitySchema = new mongoose.Schema({
  pdfPath: {
    type: String,
    default: null,
  },
  waterInfo: {
    type: String,
    default: null,
  },
  sewerInfo: {
    type: String,
    default: null,
  },
  irrigationInfo: {
    type: String,
    default: null,
  },
  garbageInfo: {
    type: String,
    default: null,
  },
  electricInfo: {
    type: String,
    default: null,
  },
  gasInfo: {
    type: String,
    default: null,
  },
  specialInfo: {
    type: String,
    default: null,
  },
  daysProvideInfo: {
    type: String,
    default: null,
  },
});

export type UtilityDocument = UtilityData & mongoose.Document & FormCommonProps;
export const Addenda22KModel = mongoose.model<UtilityDocument>(
  "Addenda22K",
  UtilitySchema,
);
