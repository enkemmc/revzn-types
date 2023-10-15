
import mongoose, { Document } from "mongoose";
import { FormCommonProps } from "../../common";
import { TitleData } from "./parsed";

export const TitleDataSchema = new mongoose.Schema({
  titleBuyerDaysFrom: String,
  titleSellerDaysFrom: String,
  titleFromBuyersReceipt: Boolean,
  titleFromBuyersMutualAcceptance: Boolean,
});

export type Addenda22TDocument = Document & TitleData & FormCommonProps;
export const Addenda22TModel = mongoose.model<Addenda22TDocument>(
  "Addenda22T",
  TitleDataSchema
);
