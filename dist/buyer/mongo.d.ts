import mongoose from "mongoose";
import { OfferBundleData } from "../offer-bundle";
type temp = mongoose.InferSchemaType<typeof BuyerSchema>;
type BuyerData = Omit<temp, "offerBundles"> & {
    _id: string;
    offerBundles: OfferBundleData[];
};
type DehydratedBuyerData = Omit<temp, "offerBundles"> & {
    offerBundles: string[];
};
declare const BuyerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    version: number;
    listingKey: string;
    offerBundles: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    version: number;
    listingKey: string;
    offerBundles: mongoose.Types.ObjectId[];
}>> & mongoose.FlatRecord<{
    name: string;
    version: number;
    listingKey: string;
    offerBundles: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type BuyerDocument = BuyerData & mongoose.Document;
declare const BuyerModel: mongoose.Model<BuyerData, {}, {}, {}, mongoose.Document<unknown, {}, BuyerData> & Omit<{
    name: string;
    version: number;
    listingKey: string;
    offerBundles: mongoose.Types.ObjectId[];
}, "offerBundles"> & {
    _id: string;
    offerBundles: OfferBundleData[];
} & Required<{
    _id: string;
}>, any>;
export { DehydratedBuyerData, BuyerModel, BuyerData, BuyerSchema, BuyerDocument, };
