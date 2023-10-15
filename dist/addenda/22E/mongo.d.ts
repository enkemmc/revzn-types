import mongoose from "mongoose";
import { FIRPTAData } from "./parsed";
import { FormCommonProps } from "../../common";
export declare const FIRPTADataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    propertyIAmSeller?: boolean | undefined;
    propertyAddress?: string | undefined;
    propertyCity?: string | undefined;
    propertyState?: string | undefined;
    propertyZip?: string | undefined;
    propertyNoStreetAddress?: boolean | undefined;
    buyerCertAmountBelow300k?: boolean | undefined;
    buyerCertAmountAbove300k?: boolean | undefined;
    citizenshipIAm?: boolean | undefined;
    taxpayerIdNumber?: string | undefined;
    addressMyHomeAddress?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    propertyIAmSeller?: boolean | undefined;
    propertyAddress?: string | undefined;
    propertyCity?: string | undefined;
    propertyState?: string | undefined;
    propertyZip?: string | undefined;
    propertyNoStreetAddress?: boolean | undefined;
    buyerCertAmountBelow300k?: boolean | undefined;
    buyerCertAmountAbove300k?: boolean | undefined;
    citizenshipIAm?: boolean | undefined;
    taxpayerIdNumber?: string | undefined;
    addressMyHomeAddress?: string | undefined;
}>> & mongoose.FlatRecord<{
    propertyIAmSeller?: boolean | undefined;
    propertyAddress?: string | undefined;
    propertyCity?: string | undefined;
    propertyState?: string | undefined;
    propertyZip?: string | undefined;
    propertyNoStreetAddress?: boolean | undefined;
    buyerCertAmountBelow300k?: boolean | undefined;
    buyerCertAmountAbove300k?: boolean | undefined;
    citizenshipIAm?: boolean | undefined;
    taxpayerIdNumber?: string | undefined;
    addressMyHomeAddress?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22EDocument = Document & FIRPTAData & FormCommonProps;
export declare const Addenda22EModel: mongoose.Model<Addenda22EDocument, {}, {}, {}, mongoose.Document<unknown, {}, Addenda22EDocument> & Document & FIRPTAData & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
