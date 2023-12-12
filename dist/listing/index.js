"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingModel = exports.ListingSchema = exports.ListingStatus = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var ListingStatus;
(function (ListingStatus) {
    ListingStatus["Active"] = "active";
    ListingStatus["Pending"] = "pending";
    ListingStatus["Sold"] = "sold";
})(ListingStatus || (exports.ListingStatus = ListingStatus = {}));
const ListingSchema = new mongoose_1.default.Schema({
    streetAddress: { type: String, required: true },
    mlsNumber: { type: Number, required: true },
    status: {
        type: String,
        required: true,
        enum: Object.values(ListingStatus),
        default: ListingStatus.Active,
    },
    pendingCommission: {
        type: Number,
        default: 0,
    },
    buyers: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Buyer",
        },
    ],
});
exports.ListingSchema = ListingSchema;
const ListingModel = mongoose_1.default.model("Listing", ListingSchema);
exports.ListingModel = ListingModel;
//# sourceMappingURL=index.js.map