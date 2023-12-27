"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda42Model = exports.AgencyDisclosureSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AgencyDisclosureSchema = new mongoose_1.default.Schema({
    pdfId: { type: String, required: true },
    brokerrepresentsType: { type: String, default: null },
    brokerrepresentsName: { type: String, default: null },
    undersigned1Type: { type: String, default: null },
    undersigned1Sig: { type: String, default: null },
    brokerSig: { type: String, default: null },
    undersigned3Sig: { type: String, default: null },
    brokerFirmAssumedname: { type: String, default: null },
    undersigned2Type: { type: String, default: null },
    brokerName: { type: String, default: null },
    undersigned4Type: { type: String, default: null },
    undersigned2Sig: { type: String, default: null },
    undersigned4Sig: { type: String, default: null },
    undersigned3Type: { type: String, default: null },
    brokerFirmName: { type: String, default: null },
});
exports.AgencyDisclosureSchema = AgencyDisclosureSchema;
const Addenda42Model = mongoose_1.default.model("Addenda42", AgencyDisclosureSchema);
exports.Addenda42Model = Addenda42Model;
//# sourceMappingURL=mongo.js.map