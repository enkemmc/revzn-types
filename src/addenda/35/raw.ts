import { DeepPartial, Value } from "../../common";

enum InspectionFieldMap {
  sewerMay = "sewer_may",
  sewerMaynot = "sewer_maynot",
  buyersNotice = "buyers_notice",
  sellerRequestBuyerProvide = "sellerrequest_buyerprovide",
  sellerRequestBuyerRepairs = "sellerrequest_buyerrepairs",
  sellerRequestAdditionalinspection = "sellerrequest_additionalinspection",
  additionalTime = "additional_time",
  neighborhoodReviewContingency = "neighborhood_review_contingency",
  buyersReply = "buyers_reply",
  neighborhoodReviewDays = "neighborhood_review_days",
  sellersResponse = "sellers_response",
  repairsSeller = "repairs_seller",
}

type RawInspectionDocument = DeepPartial<{
  fields: {
    [key in InspectionFieldMap]: Value;
  };
}>;

export { InspectionFieldMap, RawInspectionDocument };
