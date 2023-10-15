import mongoose, { Document } from "mongoose";
import { LeadData } from "./parsed";
import { FormCommonProps } from "../../common";
export declare const LeadDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    pdfPath: string;
    sellerKnownLead?: string | undefined;
    sellerNotKnownLead?: string | undefined;
    sellerProvidedToBuyer?: string | undefined;
    sellerHasNoReports?: string | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: string | undefined;
    buyerAcknowledgementAccepted?: string | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    pdfPath: string;
    sellerKnownLead?: string | undefined;
    sellerNotKnownLead?: string | undefined;
    sellerProvidedToBuyer?: string | undefined;
    sellerHasNoReports?: string | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: string | undefined;
    buyerAcknowledgementAccepted?: string | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
}>> & mongoose.FlatRecord<{
    pdfPath: string;
    sellerKnownLead?: string | undefined;
    sellerNotKnownLead?: string | undefined;
    sellerProvidedToBuyer?: string | undefined;
    sellerHasNoReports?: string | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: string | undefined;
    buyerAcknowledgementAccepted?: string | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22JDocument = Document & LeadData & FormCommonProps;
export declare const Addenda22JModel: mongoose.Model<Addenda22JDocument, {}, {}, {}, mongoose.Document<unknown, {}, Addenda22JDocument> & mongoose.Document<any, any, any> & LeadData & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
