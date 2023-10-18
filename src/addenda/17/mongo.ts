import { FormCommonProps } from "../../common";
import { Document, Schema } from "mongoose";
import { Addenda17Data } from ".";
import mongoose from "mongoose";

export type SellerDisclosureDocument = Document &
  Addenda17Data &
  FormCommonProps;

export const SellerDisclosureDataSchema = new Schema({
  titleAuthorityToSell: Boolean,
  titleFirstRightOfRefusal: Boolean,
  titleOption: Boolean,
  titleLeaseOrRental: Boolean,
  titleLifeEstate: Boolean,
  titleEncroachments: Boolean,
  titlePrivateRoad: Boolean,
  titleRightOfWayEasements: Boolean,
  titleWrittenAgreements: Boolean,
  titleStudy: Boolean,
  titleAssessments: Boolean,
  titleZoningViolations: Boolean,
  sellerCount: Boolean,
  sellerState: Boolean,
  sellerCity: Boolean,
  sellerAddress: Boolean,
  seller2Name: Boolean,
  sellerZip: Boolean,
  seller1Name: Boolean,
  sellerOccupyingNo: Boolean,
  sellerOccupyingYes: Boolean,
});

export const Addenda17Model = mongoose.model<SellerDisclosureDocument>(
  "Addenda17",
  SellerDisclosureDataSchema
);
