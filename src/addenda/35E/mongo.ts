import mongoose from "mongoose";
import { FormCommonProps } from "../../common";
import { EscalationData } from "./parsed";

const EscalationSchema = new mongoose.Schema({
  pdfPath: {
    type: String,
    required: true,
  },
  noticetobuyerSellersacceptanceCompetingofferbuyer: {
    type: Boolean,
    default: null,
  },
  newpurchasepriceLesscredits: {
    type: String,
    default: null,
  },
  noticetobuyerSellersacceptanceNoticetosellerNotcompeting: {
    type: Boolean,
    default: null,
  },
  noticetobuyerCompetingofferClosingnolaterthandays: {
    type: String,
    default: null,
  },
  noticetobuyerPurchasepriceNewprice: {
    type: String,
    default: null,
  },
  noticetobuyerPurchasepriceNottoexceed: {
    type: String,
    default: null,
  },
  newpurchasepriceCompetingoffernetpurchaseprice: {
    type: String,
    default: null,
  },
  newpurchasepriceIncorrectcalculationDays: {
    type: String,
    default: null,
  },
  noticetobuyerSellersacceptanceCompetingofferdays: {
    type: String,
    default: null,
  },
  newpurchasepriceNoticetosellerTerminationDays: {
    type: String,
    default: null,
  },
  newpurchasepriceNewpurchaseprice: {
    type: String,
    default: null,
  },
  noticetobuyerSellersacceptanceNoticetosellerSellerterminationdays: {
    type: String,
    default: null,
  },
  newpurchasepricePurchaseprice: {
    type: String,
    default: null,
  },
  newpurchasepricePlusescalation: {
    type: String,
    default: null,
  },
  newpurchasepriceCompetingofferLesscredits: {
    type: String,
    default: null,
  },
  newpurchasepricePluscredits: {
    type: String,
    default: null,
  },
  newpurchasepriceCompetingofferPluscredits: {
    type: String,
    default: null,
  },
});

type EscalationDocument = EscalationData &
  mongoose.Document &
  FormCommonProps;
const Addenda35EModel = mongoose.model<EscalationDocument>(
  "Addenda35E",
  EscalationSchema
);
export {
  EscalationSchema,
  EscalationDocument,
  Addenda35EModel
}
