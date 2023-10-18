import mongoose from "mongoose";
import { BuyerData } from "../buyer";
type temp = mongoose.InferSchemaType<typeof ListingSchema>;
type ListingData = Omit<temp, "buyers"> & {
    buyers: BuyerData[];
};
type DehydratedListingData = Omit<temp, "buyers"> & {
    buyers: string[];
};
declare const ListingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    mlsNumber: number;
    streetAddress: string;
    buyers: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    mlsNumber: number;
    streetAddress: string;
    buyers: mongoose.Types.ObjectId[];
}>> & mongoose.FlatRecord<{
    mlsNumber: number;
    streetAddress: string;
    buyers: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
declare const ListingModel: mongoose.Model<ListingData, {}, {}, {}, mongoose.Document<unknown, {}, ListingData> & Omit<{
    mlsNumber: number;
    streetAddress: string;
    buyers: mongoose.Types.ObjectId[];
}, "buyers"> & {
    buyers: BuyerData[];
} & {
    _id: mongoose.Types.ObjectId;
}, any>;
type ListingDocument = ListingData & mongoose.Document;
export { DehydratedListingData, ListingData, ListingSchema, ListingModel, ListingDocument, };
