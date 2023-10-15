"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22KModel = exports.UtilitySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.UtilitySchema = new mongoose_1.default.Schema({
    pdfPath: {
        type: String,
        default: null,
    },
    waterInfo: {
        type: String,
        default: null,
    },
    sewerInfo: {
        type: String,
        default: null,
    },
    irrigationInfo: {
        type: String,
        default: null,
    },
    garbageInfo: {
        type: String,
        default: null,
    },
    electricInfo: {
        type: String,
        default: null,
    },
    gasInfo: {
        type: String,
        default: null,
    },
    specialInfo: {
        type: String,
        default: null,
    },
    daysProvideInfo: {
        type: String,
        default: null,
    },
});
exports.Addenda22KModel = mongoose_1.default.model("Addenda22K", exports.UtilitySchema);
//# sourceMappingURL=mongo.js.map