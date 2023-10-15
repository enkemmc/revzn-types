import { FormCommonProps } from "../../common";
import { Document, Schema } from 'mongoose'

/** Seller Disclosure data. */
export type Addenda17Data = {
  titleAuthorityToSell: boolean;
  titleFirstRightOfRefusal: boolean;
  titleOption: boolean;
  titleLeaseOrRental: boolean;
  titleLifeEstate: boolean;
  titleEncroachments: boolean;
  titlePrivateRoad: boolean;
  titleRightOfWayEasements: boolean;
  titleWrittenAgreements: boolean;
  titleStudy: boolean;
  titleAssessments: boolean;
  titleZoningViolations: boolean;
  sellerCount: boolean;
  sellerState: boolean;
  sellerCity: boolean;
  sellerAddress: boolean;
  seller2Name: boolean;
  sellerZip: boolean;
  seller1Name: boolean;
  sellerOccupyingNo: boolean;
  sellerOccupyingYes: boolean;
};

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


