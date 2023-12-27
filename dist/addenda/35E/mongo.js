"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda35EModel = exports.EscalationSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EscalationSchema = new mongoose_1.default.Schema({
    pdfId: {
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
exports.EscalationSchema = EscalationSchema;
const Addenda35EModel = mongoose_1.default.model("Addenda35E", EscalationSchema);
exports.Addenda35EModel = Addenda35EModel;
//# sourceMappingURL=mongo.js.map