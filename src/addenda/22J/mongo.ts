import mongoose, { Document } from "mongoose";
import { LeadData } from "./parsed";
import { FormCommonProps } from "../../common";

/** A lot of these Strings are acknowledged via signatures, not checkboxes. */
export const LeadDataSchema = new mongoose.Schema({
  pdfPath: { type: String, required: true },
  sellerKnownLead: Boolean,
  sellerNotKnownLead: Boolean,
  sellerProvidedToBuyer: Boolean,
  sellerHasNoReports: Boolean,
  sellerExplanationLead: String,
  sellerReportsExplanation: String,
  buyerAcknowledgementWaived: Boolean,
  buyerAcknowledgementAccepted: Boolean,
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
