import mongoose, { Document } from "mongoose";
import { FormCommonProps } from "../../common";
import { InspectionData } from "./parsed";

const InspectionDataSchema = new mongoose.Schema({
  sewerMay: Boolean,
  sewerMaynot: Boolean,
  buyersNotice: String,
  sellerRequestBuyerProvide: Boolean,
  sellerRequestBuyerRepairs: Boolean,
  sellerRequestAdditionalinspection: Boolean,
  additionalTime: String,
  neighborhoodReviewContingency: String,
  buyersReply: String,
  neighborhoodReviewDays: String,
  sellersResponse: Boolean,
  repairsSeller: String,
});

type Addenda35Document = Document & InspectionData & FormCommonProps;
const Addenda35Model = mongoose.model<Addenda35Document>(
  "Addenda35",
  InspectionDataSchema,
);

export { InspectionDataSchema, Addenda35Model, Addenda35Document };
