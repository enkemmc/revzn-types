import mongoose, { Document } from "mongoose";
import { LeadData } from "./parsed";
import { FormCommonProps } from "../../common";

export const LeadDataSchema = new mongoose.Schema({
  pdfPath: { type: String, required: true },
  sellerKnownLead: String,
  sellerNotKnownLead: String,
  sellerProvidedToBuyer: String,
  sellerHasNoReports: String,
  sellerExplanationLead: String,
  sellerReportsExplanation: String,
  buyerAcknowledgementWaived: String,
  buyerAcknowledgementAccepted: String,
  buyerAcknowledgementSatisfied: String,
  buyerAcknowledgementSellersOption: String,
  buyerAcknowledgementTermination: String,
  buyerAcknowledgement: String,
  buyerAcknowledgementReceivedPamphlet: String,
});

export type Addenda22JDocument = Document & LeadData & FormCommonProps;
export const Addenda22JModel = mongoose.model<Addenda22JDocument>(
  "Addenda22J",
  LeadDataSchema
);
