import { DeepPartial, Value } from "../../common";

export enum LoanApplication {
  loanApplicationConventionalFirst = "loan application - conventional first",
  loanApplicationConventionalSecond = "loan application - conventional second",
  loanApplicationBridge = "loan application - bridge",
  loanApplicationVa = "loan application - va",
  loanApplicationFha = "loan application - fha",
  loanApplicationUsda = "loan application - usda",
  loanApplicationHeloc = "loan application - heloc",
  loanApplicationOther = "loan application - other",
  loanApplicationBuyerShallPayMoney = "loan application - buyer shall pay money",
  loanApplicationBuyerShallPayMoneyValue = "loan application - buyer shall pay money value",
  loanApplicationBuyerShallPayPercent = "loan application - buyer shall pay percent",
  loanApplicationBuyerShallPayPercentValue = "loan application - buyer shall pay percent value",
  loanApplicationDays = "loan application - days",
  loanApplicationOtherText = "loan application - other text",
}

export enum FinancingContingency {
  financingContingencySellersNotice = "financing contingency - sellers notice",
  financingContingencyNoticeDays = "financing contingency - notice days",
  financingContingencyAppraisalLessWill = "financing contingency - appraisal less will",
  financingContingencyAppraisalLessWillNot = "financing contingency - appraisal less will not",
  financingContingencyAutomaticWaiver = "financing contingency - automatic waiver",
  financingContingencyWaiverAppraisalLessWill = "financing contingency - waiver - appraisal less will",
  financingContingencyWaiverAppraisalLessWillNot = "financing contingency - waiver - appraisal less will not",
  financingContingencyWaiverDays = "financing contingency - waiver days",
}

export type RawFinancingDocument = DeepPartial<{
  fields: {
    [key in LoanApplication | FinancingContingency]: Value;
  };
}>;
