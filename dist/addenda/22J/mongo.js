"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22JModel = exports.LeadDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/** A lot of these Strings are acknowledged via signatures, not checkboxes. */
exports.LeadDataSchema = new mongoose_1.default.Schema({
    pdfPath: { type: String, required: true },
    sellerKnownLead: Boolean,
    sellerNotKnownLead: Boolean,
    sellerProvidedToBuyer: Boolean,
    sellerHasNoReports: Boolean,
    sellerExplanationLead: String,
    sellerReportsExplanation: String,
    buyerAcknowledgementWaived: Boolean,
    buyerAcknowledgementAccepted: Boolean,
    buyerAcknowledgementSatisfied: String,
    buyerAcknowledgementSellersOption: String,
    buyerAcknowledgementTermination: String,
    buyerAcknowledgement: String,
    buyerAcknowledgementReceivedPamphlet: String,
});
exports.Addenda22JModel = mongoose_1.default.model("Addenda22J", exports.LeadDataSchema);
//# sourceMappingURL=mongo.js.map