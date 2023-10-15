import mongoose from "mongoose";
import { DownpaymentData } from "./parsed";
import { FormCommonProps } from "../../common";

export const DownpaymentDataSchema = new mongoose.Schema({
  psaDated: String,
  psaBuyer: String,
  psaSeller: String,
  psaAddress: String,
  financingAddendum: Boolean,
  appraisalAddendum: Boolean,
  disclosureOfFundsMoney: Boolean,
  disclosureOfFundsPercent: Boolean,
  disclosureOfFundsMoneyAmount: String,
  disclosureOfFundsPercentAmount: String,
  financingAdditionalDownPayment: String,
  financingBuyersNoticeDays: String,
  financingSellersRightDays: String,
  appraisalBuyersNoticeDays: String,
  appraisalSellersRightDays: String,
  appraisalAdditionalDownPaymentMoney: String,
});

export type Addenda22ADDocument = Document & DownpaymentData & FormCommonProps;
export const Addenda22ADModel = mongoose.model<Addenda22ADDocument>(
  "Addenda22AD",
  DownpaymentDataSchema
);

