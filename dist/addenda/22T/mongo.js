"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22TModel = exports.TitleDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.TitleDataSchema = new mongoose_1.default.Schema({
    titleBuyerDaysFrom: String,
    titleSellerDaysFrom: String,
    titleFromBuyersReceipt: Boolean,
    titleFromBuyersMutualAcceptance: Boolean,
});
exports.Addenda22TModel = mongoose_1.default.model("Addenda22T", exports.TitleDataSchema);
//# sourceMappingURL=mongo.js.map