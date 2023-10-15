import mongoose, { Document } from "mongoose";
import { OptionalClausesData } from "./parsed";
import { FormCommonProps } from "../../common";

export const OptionalClausesDataSchema = new mongoose.Schema({
  squareFootageChecked: Boolean,
  titleInsuranceStandardChecked: Boolean,
  titleInsuranceExtendedChecked: Boolean,
  sellerCleaningChecked: Boolean,
  personalPropertyChecked: Boolean,
  utilitiesChecked: Boolean,
  insulationChecked: Boolean,
  leasedPropertyReviewChecked: Boolean,
  hoaReviewChecked: Boolean,
  hoaTransferChecked: Boolean,
  excludedItemsChecked: Boolean,
  homeWarrantyChecked: Boolean,
  otherChecked: Boolean,
});

export type Addenda22DDocument = Document &
  OptionalClausesData &
  FormCommonProps;
export const Addenda22DModel = mongoose.model<Addenda22DDocument>(
  "Addenda22D",
  OptionalClausesDataSchema,
);
