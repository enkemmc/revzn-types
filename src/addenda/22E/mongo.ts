import mongoose from "mongoose";

import { FIRPTAData } from "./parsed";
import { FormCommonProps } from "../../common";

export const FIRPTADataSchema = new mongoose.Schema({
  propertyIAmSeller: Boolean,
  propertyAddress: String,
  propertyCity: String,
  propertyState: String,
  propertyZip: String,
  propertyNoStreetAddress: Boolean,
  buyerCertAmountBelow300k: Boolean,
  buyerCertAmountAbove300k: Boolean,
  citizenshipIAm: Boolean,
  taxpayerIdNumber: String,
  addressMyHomeAddress: String,
});

export type Addenda22EDocument = Document & FIRPTAData & FormCommonProps;
export const Addenda22EModel = mongoose.model<Addenda22EDocument>(
  "Addenda22E",
  FIRPTADataSchema
);
