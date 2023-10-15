import mongoose, { Document } from "mongoose";
import { FormCommonProps } from "../../common";
import { TitleData } from "./parsed";
export declare const TitleDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    titleBuyerDaysFrom?: string | undefined;
    titleSellerDaysFrom?: string | undefined;
    titleFromBuyersReceipt?: boolean | undefined;
    titleFromBuyersMutualAcceptance?: boolean | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    titleBuyerDaysFrom?: string | undefined;
    titleSellerDaysFrom?: string | undefined;
    titleFromBuyersReceipt?: boolean | undefined;
    titleFromBuyersMutualAcceptance?: boolean | undefined;
}>> & mongoose.FlatRecord<{
    titleBuyerDaysFrom?: string | undefined;
    titleSellerDaysFrom?: string | undefined;
    titleFromBuyersReceipt?: boolean | undefined;
    titleFromBuyersMutualAcceptance?: boolean | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22TDocument = Document & TitleData & FormCommonProps;
export declare const Addenda22TModel: mongoose.Model<Addenda22TDocument, {}, {}, {}, mongoose.Document<unknown, {}, Addenda22TDocument> & mongoose.Document<any, any, any> & TitleData & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
