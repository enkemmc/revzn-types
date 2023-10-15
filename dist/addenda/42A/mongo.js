"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda42AModel = exports.MultipleBrokersSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MultipleBrokersSchema = new mongoose_1.default.Schema({
    pdfPath: {
        type: String,
        required: true,
    },
    addBuyerbrokerName: { type: String, default: null },
    addBuyerbrokerMlsoffice: { type: String, default: null },
    addBuyerbrokerMlslag: { type: String, default: null },
    addBuyerbroker2Name: { type: String, default: null },
    addBuyerbrokerBuyerbroker: { type: String, default: null },
    addBuyerbrokerDualagent: { type: String, default: null },
    addBuyerbroker2Buyerbroker: { type: String, default: null },
    addBuyerbroker2Dualagent: { type: String, default: null },
    addListingbrokerListingbroker: { type: String, default: null },
    addListingbrokerDualagent: { type: String, default: null },
    addListingbroker2Listingbroker: { type: String, default: null },
    addListingbroker2Dualagent: { type: String, default: null },
    addListingbroker2Name: { type: String, default: null },
    addListingbroker2Mlsoffice: { type: String, default: null },
    addBuyerbroker2Mlsoffice: { type: String, default: null },
    addListingbrokerMlslag: { type: String, default: null },
    addBuyerbroker2Mlslag: { type: String, default: null },
    addListingbrokerMlsoffice: { type: String, default: null },
    addListingbrokerName: { type: String, default: null },
    addListingbroker2Mlslag: { type: String, default: null },
});
exports.MultipleBrokersSchema = MultipleBrokersSchema;
const Addenda42AModel = mongoose_1.default.model("Addenda42A", MultipleBrokersSchema);
exports.Addenda42AModel = Addenda42AModel;
//# sourceMappingURL=mongo.js.map