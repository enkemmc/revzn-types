"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22ASchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Addenda22ASchema = new mongoose_1.default.Schema({
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
//# sourceMappingURL=parsed.js.map