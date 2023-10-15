import mongoose from "mongoose";
import { DownpaymentData } from "./parsed";
import { FormCommonProps } from "../../common";
export declare const DownpaymentDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    psaDated?: string | undefined;
    psaBuyer?: string | undefined;
    psaSeller?: string | undefined;
    psaAddress?: string | undefined;
    financingAddendum?: boolean | undefined;
    appraisalAddendum?: boolean | undefined;
    disclosureOfFundsMoney?: boolean | undefined;
    disclosureOfFundsPercent?: boolean | undefined;
    disclosureOfFundsMoneyAmount?: string | undefined;
    disclosureOfFundsPercentAmount?: string | undefined;
    financingAdditionalDownPayment?: string | undefined;
    financingBuyersNoticeDays?: string | undefined;
    financingSellersRightDays?: string | undefined;
    appraisalBuyersNoticeDays?: string | undefined;
    appraisalSellersRightDays?: string | undefined;
    appraisalAdditionalDownPaymentMoney?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    psaDated?: string | undefined;
    psaBuyer?: string | undefined;
    psaSeller?: string | undefined;
    psaAddress?: string | undefined;
    financingAddendum?: boolean | undefined;
    appraisalAddendum?: boolean | undefined;
    disclosureOfFundsMoney?: boolean | undefined;
    disclosureOfFundsPercent?: boolean | undefined;
    disclosureOfFundsMoneyAmount?: string | undefined;
    disclosureOfFundsPercentAmount?: string | undefined;
    financingAdditionalDownPayment?: string | undefined;
    financingBuyersNoticeDays?: string | undefined;
    financingSellersRightDays?: string | undefined;
    appraisalBuyersNoticeDays?: string | undefined;
    appraisalSellersRightDays?: string | undefined;
    appraisalAdditionalDownPaymentMoney?: string | undefined;
}>> & mongoose.FlatRecord<{
    psaDated?: string | undefined;
    psaBuyer?: string | undefined;
    psaSeller?: string | undefined;
    psaAddress?: string | undefined;
    financingAddendum?: boolean | undefined;
    appraisalAddendum?: boolean | undefined;
    disclosureOfFundsMoney?: boolean | undefined;
    disclosureOfFundsPercent?: boolean | undefined;
    disclosureOfFundsMoneyAmount?: string | undefined;
    disclosureOfFundsPercentAmount?: string | undefined;
    financingAdditionalDownPayment?: string | undefined;
    financingBuyersNoticeDays?: string | undefined;
    financingSellersRightDays?: string | undefined;
    appraisalBuyersNoticeDays?: string | undefined;
    appraisalSellersRightDays?: string | undefined;
    appraisalAdditionalDownPaymentMoney?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22ADDocument = Document & DownpaymentData & FormCommonProps;
export declare const Addenda22ADModel: mongoose.Model<Addenda22ADDocument, {}, {}, {}, mongoose.Document<unknown, {}, Addenda22ADDocument> & Document & DownpaymentData & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;