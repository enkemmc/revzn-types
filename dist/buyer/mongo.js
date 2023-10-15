"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerSchema = exports.BuyerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BuyerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    listingKey: { type: String, required: true },
    version: { type: Number, default: 1 },
    offerBundles: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "OfferBundle",
        },
    ],
});
exports.BuyerSchema = BuyerSchema;
const BuyerModel = mongoose_1.default.model("Buyer", BuyerSchema);
exports.BuyerModel = BuyerModel;
//# sourceMappingURL=mongo.js.map