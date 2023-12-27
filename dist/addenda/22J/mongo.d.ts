import mongoose, { Document } from "mongoose";
import { LeadData } from "./parsed";
import { FormCommonProps } from "../../common";
/** A lot of these Strings are acknowledged via signatures, not checkboxes. */
export declare const LeadDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    pdfId: string;
    sellerKnownLead?: boolean | undefined;
    sellerNotKnownLead?: boolean | undefined;
    sellerProvidedToBuyer?: boolean | undefined;
    sellerHasNoReports?: boolean | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: boolean | undefined;
    buyerAcknowledgementAccepted?: boolean | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    pdfId: string;
    sellerKnownLead?: boolean | undefined;
    sellerNotKnownLead?: boolean | undefined;
    sellerProvidedToBuyer?: boolean | undefined;
    sellerHasNoReports?: boolean | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: boolean | undefined;
    buyerAcknowledgementAccepted?: boolean | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
}>> & mongoose.FlatRecord<{
    pdfId: string;
    sellerKnownLead?: boolean | undefined;
    sellerNotKnownLead?: boolean | undefined;
    sellerProvidedToBuyer?: boolean | undefined;
    sellerHasNoReports?: boolean | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: boolean | undefined;
    buyerAcknowledgementAccepted?: boolean | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22JDocument = Document & LeadData & FormCommonProps;
export declare const Addenda22JModel: mongoose.Model<Addenda22JDocument, {}, {}, {}, mongoose.Document<unknown, {}, Addenda22JDocument> & mongoose.Document<any, any, any> & {
    pdfId: string;
    sellerKnownLead?: boolean | undefined;
    sellerNotKnownLead?: boolean | undefined;
    sellerProvidedToBuyer?: boolean | undefined;
    sellerHasNoReports?: boolean | undefined;
    sellerExplanationLead?: string | undefined;
    sellerReportsExplanation?: string | undefined;
    buyerAcknowledgementWaived?: boolean | undefined;
    buyerAcknowledgementAccepted?: boolean | undefined;
    buyerAcknowledgementSatisfied?: string | undefined;
    buyerAcknowledgementSellersOption?: string | undefined;
    buyerAcknowledgementTermination?: string | undefined;
    buyerAcknowledgement?: string | undefined;
    buyerAcknowledgementReceivedPamphlet?: string | undefined;
} & {
    _id: string;
} & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
