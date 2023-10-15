import mongoose from "mongoose";
export type ListingData = {
    id?: string;
    streetAddress: string;
    buyers: string[];
};
export declare const ListingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    streetAddress: string;
    mlsNumber: number;
    buyers: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    streetAddress: string;
    mlsNumber: number;
    buyers: mongoose.Types.ObjectId[];
}>> & mongoose.FlatRecord<{
    streetAddress: string;
    mlsNumber: number;
    buyers: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type ListingDocument = ListingData & mongoose.Document;
