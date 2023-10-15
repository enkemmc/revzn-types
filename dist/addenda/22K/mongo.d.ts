import mongoose from "mongoose";
import { FormCommonProps } from "../../common";
import { UtilityData } from "./parsed";
export declare const UtilitySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    pdfPath: string;
    waterInfo: string;
    sewerInfo: string;
    irrigationInfo: string;
    garbageInfo: string;
    electricInfo: string;
    gasInfo: string;
    specialInfo: string;
    daysProvideInfo: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    pdfPath: string;
    waterInfo: string;
    sewerInfo: string;
    irrigationInfo: string;
    garbageInfo: string;
    electricInfo: string;
    gasInfo: string;
    specialInfo: string;
    daysProvideInfo: string;
}>> & mongoose.FlatRecord<{
    pdfPath: string;
    waterInfo: string;
    sewerInfo: string;
    irrigationInfo: string;
    garbageInfo: string;
    electricInfo: string;
    gasInfo: string;
    specialInfo: string;
    daysProvideInfo: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type UtilityDocument = UtilityData & mongoose.Document & FormCommonProps;
export declare const Addenda22KModel: mongoose.Model<UtilityDocument, {}, {}, {}, mongoose.Document<unknown, {}, UtilityDocument> & UtilityData & mongoose.Document<any, any, any> & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
