import mongoose, { Document } from "mongoose";
import { FormCommonProps } from "../../common";
import { InspectionData } from "./parsed";
declare const InspectionDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    sewerMay?: boolean | undefined;
    sewerMaynot?: boolean | undefined;
    buyersNotice?: string | undefined;
    sellerRequestBuyerProvide?: boolean | undefined;
    sellerRequestBuyerRepairs?: boolean | undefined;
    sellerRequestAdditionalinspection?: boolean | undefined;
    additionalTime?: string | undefined;
    neighborhoodReviewContingency?: string | undefined;
    buyersReply?: string | undefined;
    neighborhoodReviewDays?: string | undefined;
    sellersResponse?: boolean | undefined;
    repairsSeller?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    sewerMay?: boolean | undefined;
    sewerMaynot?: boolean | undefined;
    buyersNotice?: string | undefined;
    sellerRequestBuyerProvide?: boolean | undefined;
    sellerRequestBuyerRepairs?: boolean | undefined;
    sellerRequestAdditionalinspection?: boolean | undefined;
    additionalTime?: string | undefined;
    neighborhoodReviewContingency?: string | undefined;
    buyersReply?: string | undefined;
    neighborhoodReviewDays?: string | undefined;
    sellersResponse?: boolean | undefined;
    repairsSeller?: string | undefined;
}>> & mongoose.FlatRecord<{
    sewerMay?: boolean | undefined;
    sewerMaynot?: boolean | undefined;
    buyersNotice?: string | undefined;
    sellerRequestBuyerProvide?: boolean | undefined;
    sellerRequestBuyerRepairs?: boolean | undefined;
    sellerRequestAdditionalinspection?: boolean | undefined;
    additionalTime?: string | undefined;
    neighborhoodReviewContingency?: string | undefined;
    buyersReply?: string | undefined;
    neighborhoodReviewDays?: string | undefined;
    sellersResponse?: boolean | undefined;
    repairsSeller?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type Addenda35Document = Document & InspectionData & FormCommonProps;
declare const Addenda35Model: mongoose.Model<Addenda35Document, {}, {}, {}, mongoose.Document<unknown, {}, Addenda35Document> & mongoose.Document<any, any, any> & InspectionData & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
export { InspectionDataSchema, Addenda35Model, Addenda35Document };
