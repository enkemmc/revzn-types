import mongoose from "mongoose";
import { FormCommonProps } from "../../common";

// Financing Addenda
export type IAddenda22A = FinancingData & FormCommonProps;

export const Addenda22ASchema = new mongoose.Schema({
  pdfPath: { type: String, required: true },
  loanApplicationData: {
    loanApplicationConventionalFirst: Boolean,
    loanApplicationConventionalSecond: Boolean,
    loanApplicationBridge: Boolean,
    loanApplicationVa: Boolean,
    loanApplicationFha: Boolean,
    loanApplicationUsda: Boolean,
    loanApplicationHeloc: Boolean,
    loanApplicationOther: Boolean,
    loanApplicationBuyerShallPayMoney: Boolean,
    loanApplicationBuyerShallPayMoneyValue: String,
    loanApplicationBuyerShallPayPercent: Boolean,
    loanApplicationBuyerShallPayPercentValue: String,
    loanApplicationDays: String,
    loanApplicationOtherText: String,
  },
  financingContingencyData: {
    financingContingencySellersNotice: Boolean,
    financingContingencyNoticeDays: String,
    financingContingencyAppraisalLessWill: Boolean,
    financingContingencyAppraisalLessWillNot: Boolean,
    financingContingencyAutomaticWaiver: Boolean,
    financingContingencyWaiverAppraisalLessWill: Boolean,
    financingContingencyWaiverAppraisalLessWillNot: Boolean,
    financingContingencyWaiverDays: String,
  },
});

export const Addenda22AModel = mongoose.model<Addenda22ADocument>(
  "Addenda22A",
  Addenda22ASchema
);

export type Addenda22ADocument = IAddenda22A & mongoose.Document;

export type FinancingData = {
  pdfPath?: string;
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
