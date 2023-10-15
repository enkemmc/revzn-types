"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferBundleModel = exports.OfferBundleSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.OfferBundleSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Agent",
        required: true,
    },
    pdfPath: {
        type: String,
        required: true,
    },
    psa: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "PSA",
        default: null,
    },
    addenda: {
        "22K": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22K",
            default: null,
        },
        "22J": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22J",
            default: null,
        },
        "22E": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22E",
            default: null,
        },
        "17": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda17",
            default: null,
        },
        "22A": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22A",
            default: null,
        },
        "21": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "PSA",
            default: null,
        },
        "27": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "28": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "PSA",
            default: null,
        },
        "22D": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22D",
            default: null,
        },
        "34": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "35": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda35",
            default: null,
        },
        "35W": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "35E": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda35E",
            default: null,
        },
        "36": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "41": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "42": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda42",
            default: null,
        },
        "42A": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda42A",
            default: null,
        },
        "22EF": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "22T": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22T",
            default: null,
        },
        "22Y": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda",
            default: null,
        },
        "22AD": {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Addenda22AD",
            default: null,
        },
    },
});
exports.OfferBundleModel = mongoose_1.default.model("OfferBundle", exports.OfferBundleSchema);
//# sourceMappingURL=index.js.map