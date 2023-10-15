import mongoose from "mongoose";
export type OfferBundleData = {
    userid: string;
    id?: string;
    psa: string;
    addenda: Record<string, any>;
    pdfPath: string;
};
export declare const OfferBundleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    pdfPath: string;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        27: mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        34: mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35W": mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        36: mongoose.Types.ObjectId;
        41: mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22EF": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22Y": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    pdfPath: string;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        27: mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        34: mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35W": mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        36: mongoose.Types.ObjectId;
        41: mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22EF": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22Y": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}>> & mongoose.FlatRecord<{
    userId: mongoose.Types.ObjectId;
    pdfPath: string;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        27: mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        34: mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35W": mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        36: mongoose.Types.ObjectId;
        41: mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22EF": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22Y": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const OfferBundleModel: mongoose.Model<OfferBundleData, {}, {}, {}, mongoose.Document<unknown, {}, OfferBundleData> & OfferBundleData & {
    _id: mongoose.Types.ObjectId;
}, any>;
export type OfferBundleDocument = OfferBundleData & mongoose.Document;
