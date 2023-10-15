"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22ADModel = exports.DownpaymentDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.DownpaymentDataSchema = new mongoose_1.default.Schema({
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
exports.Addenda22ADModel = mongoose_1.default.model("Addenda22AD", exports.DownpaymentDataSchema);
//# sourceMappingURL=mongo.js.map