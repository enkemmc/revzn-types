import { DeepPartial, Value } from "../../common";
export declare enum DownPaymentFieldMap {
    psaDated = "psa_dated",
    psaBuyer = "psa_buyer",
    psaSeller = "psa_seller",
    psaAddress = "psa_address",
    financingAddendum = "financing_addendum",
    appraisalAddendum = "appraisal_addendum",
    disclosureOfFundsMoney = "disclosureoffunds_money",
    disclosureOfFundsPercent = "disclosureoffunds_percent",
    disclosureOfFundsMoneyAmount = "disclosureoffunds_money_amount",
    disclosureOfFundsPercentAmount = "disclosureoffunds_percent_amount",
    financingAdditionalDownPayment = "financing_additional_down_payment",
    financingBuyersNoticeDays = "financing_buyers_notice_days",
    financingSellersRightDays = "financing_sellers_right_days",
    appraisalBuyersNoticeDays = "appraisal_buyersnotice_days",
    appraisalSellersRightDays = "appraisal_sellersright_days",
    appraisalAdditionalDownPaymentMoney = "appraisal_additionaldownpayment_money"
}
export type RawDownPaymentDocument = DeepPartial<{
    fields: {
        [key in DownPaymentFieldMap]: Value;
    };
}>;
