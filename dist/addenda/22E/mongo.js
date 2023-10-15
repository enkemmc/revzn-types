"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22EModel = exports.FIRPTADataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.FIRPTADataSchema = new mongoose_1.default.Schema({
    propertyIAmSeller: Boolean,
    propertyAddress: String,
    propertyCity: String,
    propertyState: String,
    propertyZip: String,
    propertyNoStreetAddress: Boolean,
    buyerCertAmountBelow300k: Boolean,
    buyerCertAmountAbove300k: Boolean,
    citizenshipIAm: Boolean,
    taxpayerIdNumber: String,
    addressMyHomeAddress: String,
});
exports.Addenda22EModel = mongoose_1.default.model("Addenda22E", exports.FIRPTADataSchema);
//# sourceMappingURL=mongo.js.map