"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda22DModel = exports.OptionalClausesDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.OptionalClausesDataSchema = new mongoose_1.default.Schema({
    squareFootageChecked: Boolean,
    titleInsuranceStandardChecked: Boolean,
    titleInsuranceExtendedChecked: Boolean,
    sellerCleaningChecked: Boolean,
    personalPropertyChecked: Boolean,
    utilitiesChecked: Boolean,
    insulationChecked: Boolean,
    leasedPropertyReviewChecked: Boolean,
    hoaReviewChecked: Boolean,
    hoaTransferChecked: Boolean,
    excludedItemsChecked: Boolean,
    homeWarrantyChecked: Boolean,
    otherChecked: Boolean,
});
exports.Addenda22DModel = mongoose_1.default.model("Addenda22D", exports.OptionalClausesDataSchema);
//# sourceMappingURL=mongo.js.map