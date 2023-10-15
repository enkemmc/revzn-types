import mongoose from "mongoose";
import { FormCommonProps } from "../../common";
export type IAddenda22A = FinancingData & FormCommonProps;
export declare const Addenda22ASchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    pdfPath: string;
    loanApplicationData?: {
        loanApplicationConventionalFirst?: boolean | undefined;
        loanApplicationConventionalSecond?: boolean | undefined;
        loanApplicationBridge?: boolean | undefined;
        loanApplicationVa?: boolean | undefined;
        loanApplicationFha?: boolean | undefined;
        loanApplicationUsda?: boolean | undefined;
        loanApplicationHeloc?: boolean | undefined;
        loanApplicationOther?: boolean | undefined;
        loanApplicationBuyerShallPayMoney?: boolean | undefined;
        loanApplicationBuyerShallPayMoneyValue?: string | undefined;
        loanApplicationBuyerShallPayPercent?: boolean | undefined;
        loanApplicationBuyerShallPayPercentValue?: string | undefined;
        loanApplicationDays?: string | undefined;
        loanApplicationOtherText?: string | undefined;
    } | undefined;
    financingContingencyData?: {
        financingContingencySellersNotice?: boolean | undefined;
        financingContingencyNoticeDays?: string | undefined;
        financingContingencyAppraisalLessWill?: boolean | undefined;
        financingContingencyAppraisalLessWillNot?: boolean | undefined;
        financingContingencyAutomaticWaiver?: boolean | undefined;
        financingContingencyWaiverAppraisalLessWill?: boolean | undefined;
        financingContingencyWaiverAppraisalLessWillNot?: boolean | undefined;
        financingContingencyWaiverDays?: string | undefined;
    } | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    pdfPath: string;
    loanApplicationData?: {
        loanApplicationConventionalFirst?: boolean | undefined;
        loanApplicationConventionalSecond?: boolean | undefined;
        loanApplicationBridge?: boolean | undefined;
        loanApplicationVa?: boolean | undefined;
        loanApplicationFha?: boolean | undefined;
        loanApplicationUsda?: boolean | undefined;
        loanApplicationHeloc?: boolean | undefined;
        loanApplicationOther?: boolean | undefined;
        loanApplicationBuyerShallPayMoney?: boolean | undefined;
        loanApplicationBuyerShallPayMoneyValue?: string | undefined;
        loanApplicationBuyerShallPayPercent?: boolean | undefined;
        loanApplicationBuyerShallPayPercentValue?: string | undefined;
        loanApplicationDays?: string | undefined;
        loanApplicationOtherText?: string | undefined;
    } | undefined;
    financingContingencyData?: {
        financingContingencySellersNotice?: boolean | undefined;
        financingContingencyNoticeDays?: string | undefined;
        financingContingencyAppraisalLessWill?: boolean | undefined;
        financingContingencyAppraisalLessWillNot?: boolean | undefined;
        financingContingencyAutomaticWaiver?: boolean | undefined;
        financingContingencyWaiverAppraisalLessWill?: boolean | undefined;
        financingContingencyWaiverAppraisalLessWillNot?: boolean | undefined;
        financingContingencyWaiverDays?: string | undefined;
    } | undefined;
}>> & mongoose.FlatRecord<{
    pdfPath: string;
    loanApplicationData?: {
        loanApplicationConventionalFirst?: boolean | undefined;
        loanApplicationConventionalSecond?: boolean | undefined;
        loanApplicationBridge?: boolean | undefined;
        loanApplicationVa?: boolean | undefined;
        loanApplicationFha?: boolean | undefined;
        loanApplicationUsda?: boolean | undefined;
        loanApplicationHeloc?: boolean | undefined;
        loanApplicationOther?: boolean | undefined;
        loanApplicationBuyerShallPayMoney?: boolean | undefined;
        loanApplicationBuyerShallPayMoneyValue?: string | undefined;
        loanApplicationBuyerShallPayPercent?: boolean | undefined;
        loanApplicationBuyerShallPayPercentValue?: string | undefined;
        loanApplicationDays?: string | undefined;
        loanApplicationOtherText?: string | undefined;
    } | undefined;
    financingContingencyData?: {
        financingContingencySellersNotice?: boolean | undefined;
        financingContingencyNoticeDays?: string | undefined;
        financingContingencyAppraisalLessWill?: boolean | undefined;
        financingContingencyAppraisalLessWillNot?: boolean | undefined;
        financingContingencyAutomaticWaiver?: boolean | undefined;
        financingContingencyWaiverAppraisalLessWill?: boolean | undefined;
        financingContingencyWaiverAppraisalLessWillNot?: boolean | undefined;
        financingContingencyWaiverDays?: string | undefined;
    } | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22ADocument = IAddenda22A & mongoose.Document;
export type FinancingData = {
    loanApplicationData: LoanApplicationData;
    financingContingencyData: FinancingContingencyData;
};
export type LoanApplicationData = {
    loanApplicationConventionalFirst: boolean;
    loanApplicationConventionalSecond: boolean;
    loanApplicationBridge: boolean;
    loanApplicationVa: boolean;
    loanApplicationFha: boolean;
    loanApplicationUsda: boolean;
    loanApplicationHeloc: boolean;
    loanApplicationOther: boolean;
    loanApplicationBuyerShallPayMoney: boolean;
    loanApplicationBuyerShallPayMoneyValue: string;
    loanApplicationBuyerShallPayPercent: boolean;
    loanApplicationBuyerShallPayPercentValue: string;
    loanApplicationDays: string;
    loanApplicationOtherText: string;
};
export type FinancingContingencyData = {
    financingContingencySellersNotice: boolean;
    financingContingencyNoticeDays: string;
    financingContingencyAppraisalLessWill: boolean;
    financingContingencyAppraisalLessWillNot: boolean;
    financingContingencyAutomaticWaiver: boolean;
    financingContingencyWaiverAppraisalLessWill: boolean;
    financingContingencyWaiverAppraisalLessWillNot: boolean;
    financingContingencyWaiverDays: string;
};
