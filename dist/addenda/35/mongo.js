"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda35Model = exports.InspectionDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const InspectionDataSchema = new mongoose_1.default.Schema({
    sewerMay: Boolean,
    sewerMaynot: Boolean,
    buyersNotice: String,
    sellerRequestBuyerProvide: Boolean,
    sellerRequestBuyerRepairs: Boolean,
    sellerRequestAdditionalinspection: Boolean,
    additionalTime: String,
    neighborhoodReviewContingency: String,
    buyersReply: String,
    neighborhoodReviewDays: String,
    sellersResponse: Boolean,
    repairsSeller: String,
});
exports.InspectionDataSchema = InspectionDataSchema;
const Addenda35Model = mongoose_1.default.model("Addenda35", InspectionDataSchema);
exports.Addenda35Model = Addenda35Model;
//# sourceMappingURL=mongo.js.map