"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingModel = exports.ListingSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ListingSchema = new mongoose_1.default.Schema({
    streetAddress: { type: String, required: true },
    mlsNumber: { type: Number, required: true },
    buyers: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Buyer",
        },
    ],
});
exports.ListingModel = mongoose_1.default.model("Listing", exports.ListingSchema);
//# sourceMappingURL=index.js.map