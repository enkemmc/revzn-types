"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PSAModel = exports.PSASchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.PSASchema = new mongoose_1.Schema({
    pdfId: { type: String, required: true },
    date: { type: String, required: true },
    mlsNumber: { type: String, required: true },
    offerExpirationDate: { type: String, default: "" },
    earnestMoney: {
        sum: { type: String, default: "" },
        check: { type: Boolean, default: false },
        note: { type: Boolean, default: false },
        wire: { type: Boolean, default: false },
        other: { type: Boolean, default: false },
        otherValue: { type: String, default: "" },
        deliveryDate: { type: String, default: "" },
        heldByBuyerFirm: { type: Boolean, default: false },
        heldByClosingAgent: { type: Boolean, default: false },
    },
    buyer: { type: [String], default: [] },
    seller: { type: [String], default: [] },
    address: {
        street: { type: String, default: "" },
        city: { type: String, default: "" },
        county: { type: String, default: "" },
        state: { type: String, default: "" },
        zip: { type: String, default: "" },
    },
    price: { type: String, default: "" },
    titleInsuranceCompany: { type: String, default: "" },
    closingAgentCompany: { type: String, default: "" },
    closingAgentIndividual: { type: String, default: "" },
    closingData: {
        date: { type: String, default: "" },
        onClosing: { type: Boolean, default: false },
        other: { type: Boolean, default: false },
        otherText: { type: String, default: "" },
    },
    servicesOfClosingAgent: {
        requested: { type: Boolean, default: false },
        waived: { type: Boolean, default: false },
    },
    chargesDueAfterClosing: {
        assumedByBuyer: { type: Boolean, default: false },
        prepaidInFullBySeller: { type: Boolean, default: false },
    },
    sellerCitizenship: {
        sellerIsNotForeign: { type: Boolean, default: false },
        sellerIsForeign: { type: Boolean, default: false },
    },
    agencyDisclosure: {
        buyerRepresentedBy: {
            buyerBroker: { type: Boolean, default: false },
            dualAgent: { type: Boolean, default: false },
            unrepresented: { type: Boolean, default: false },
        },
        sellerRepresentedBy: {
            listingBroker: { type: Boolean, default: false },
            dualAgent: { type: Boolean, default: false },
            unrepresented: { type: Boolean, default: false },
        },
    },
    addenda: {
        type: [[String]],
        default: [],
    },
    buyerAuthentisign: {
        signatureOne: { type: String, default: "" },
        signatureDateOne: { type: String, default: "" },
        signatureTwo: { type: String, default: "" },
        signatureDateTwo: { type: String, default: "" },
        streetAddress: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zip: { type: String, default: "" },
        phone: { type: String, default: "" },
        email: { type: String, default: "" },
        brokerageFirm: { type: String, default: "" },
        broker: { type: String, default: "" },
        firmPhone: { type: String, default: "" },
        firmDocumentEmail: { type: String, default: "" },
        brokerEmail: { type: String, default: "" },
        brokerDolLicenseNum: { type: String, default: "" },
        faxNum: { type: String, default: "" },
        mlsOfficeNum: { type: String, default: "" },
        mlsLagNum: { type: String, default: "" },
        firmFaxNum: { type: String, default: "" },
        brokerPhone: { type: String, default: "" },
        firmDolNum: { type: String, default: "" },
    },
    buyerBrokerageCompensation: { type: String, default: "" },
    buyerBrokerageAmountInListing: { type: String, default: "" },
    buyerBrokeragePayOffered: { type: Boolean, default: false },
    buyerBrokerageOther: { type: Boolean, default: false },
});
exports.PSAModel = mongoose_1.default.model("PSA", exports.PSASchema);
//# sourceMappingURL=PSASchema.js.map