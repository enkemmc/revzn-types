import mongoose from "mongoose";
export type BuyerData = {
    id: string;
    version: number;
    /** Each version of their offer that a Buyer has sent. */
    offerBundles?: string[];
    name: string;
    /** This is how we determine if a bundle is from a new buyer, or a new version of a bundle that has already been uploaded from the same buyer. */
    listingKey: string;
};
export declare const BuyerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
export type BuyerDocument = BuyerData & mongoose.Document;
