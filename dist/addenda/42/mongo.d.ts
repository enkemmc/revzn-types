import mongoose from "mongoose";
import { AgencyDisclosureData } from "./parsed";
import { FormCommonProps } from "../../common";
declare const AgencyDisclosureSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    pdfId: string;
    brokerrepresentsType: string;
    brokerrepresentsName: string;
    undersigned1Type: string;
    undersigned1Sig: string;
    brokerSig: string;
    undersigned3Sig: string;
    brokerFirmAssumedname: string;
    undersigned2Type: string;
    brokerName: string;
    undersigned4Type: string;
    undersigned2Sig: string;
    undersigned4Sig: string;
    undersigned3Type: string;
    brokerFirmName: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    pdfId: string;
    brokerrepresentsType: string;
    brokerrepresentsName: string;
    undersigned1Type: string;
    undersigned1Sig: string;
    brokerSig: string;
    undersigned3Sig: string;
    brokerFirmAssumedname: string;
    undersigned2Type: string;
    brokerName: string;
    undersigned4Type: string;
    undersigned2Sig: string;
    undersigned4Sig: string;
    undersigned3Type: string;
    brokerFirmName: string;
}>> & mongoose.FlatRecord<{
    pdfId: string;
    brokerrepresentsType: string;
    brokerrepresentsName: string;
    undersigned1Type: string;
    undersigned1Sig: string;
    brokerSig: string;
    undersigned3Sig: string;
    brokerFirmAssumedname: string;
    undersigned2Type: string;
    brokerName: string;
    undersigned4Type: string;
    undersigned2Sig: string;
    undersigned4Sig: string;
    undersigned3Type: string;
    brokerFirmName: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type AgencyDisclosureDocument = AgencyDisclosureData & mongoose.Document & FormCommonProps;
declare const Addenda42Model: mongoose.Model<AgencyDisclosureDocument, {}, {}, {}, mongoose.Document<unknown, {}, AgencyDisclosureDocument> & AgencyDisclosureData & mongoose.Document<any, any, any> & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
export { AgencyDisclosureSchema, AgencyDisclosureDocument, Addenda42Model };
