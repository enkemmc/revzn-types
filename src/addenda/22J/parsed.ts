import mongoose from "mongoose";
import { LeadDataSchema } from "./mongo";

type temp = mongoose.InferSchemaType<typeof LeadDataSchema>;
export type LeadData = temp & { _id: string };

// export type LeadData = {
//   sellerKnownLead: boolean;
//   sellerNotKnownLead: ;
//   sellerProvidedToBuyer: string;
//   sellerHasNoReports: string;
//   sellerExplanationLead: string;
//   sellerReportsExplanation: string;
//   buyerAcknowledgementWaived: string;
//   buyerAcknowledgementAccepted: string;
//   buyerAcknowledgementSatisfied: string;
//   buyerAcknowledgementSellersOption: string;
//   buyerAcknowledgementTermination: string;
//   buyerAcknowledgement: string;
//   buyerAcknowledgementReceivedPamphlet: string;

