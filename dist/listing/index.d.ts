import mongoose from "mongoose";
import { BuyerData } from "../buyer";
type temp = mongoose.InferSchemaType<typeof ListingSchema>;
type ListingData = Omit<temp, "buyers"> & {
    _id: string;
    buyers: BuyerData[];
};
type DehydratedListingData = Omit<temp, "buyers"> & {
    buyers: string[];
};
declare enum ListingStatus {
    Active = "active",
    Pending = "pending",
    Sold = "sold"
}
declare const ListingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: ListingStatus;
    mlsNumber: number;
    streetAddress: string;
    pendingCommission: number;
    buyers: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: ListingStatus;
    mlsNumber: number;
    streetAddress: string;
    pendingCommission: number;
    buyers: mongoose.Types.ObjectId[];
}>> & mongoose.FlatRecord<{
    status: ListingStatus;
    mlsNumber: number;
    streetAddress: string;
    pendingCommission: number;
    buyers: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
declare const ListingModel: mongoose.Model<ListingData, {}, {}, {}, mongoose.Document<unknown, {}, ListingData> & Omit<{
    status: ListingStatus;
    mlsNumber: number;
    streetAddress: string;
    pendingCommission: number;
    buyers: mongoose.Types.ObjectId[];
}, "buyers"> & {
    _id: string;
    buyers: BuyerData[];
} & Required<{
    _id: string;
}>, any>;
type ListingDocument = ListingData & mongoose.Document;
export { DehydratedListingData, ListingStatus, ListingData, ListingSchema, ListingModel, ListingDocument, };
