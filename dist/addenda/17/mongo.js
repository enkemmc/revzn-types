"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addenda17Model = exports.SellerDisclosureDataSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.SellerDisclosureDataSchema = new mongoose_1.Schema({
    titleAuthorityToSell: Boolean,
    titleFirstRightOfRefusal: Boolean,
    titleOption: Boolean,
    titleLeaseOrRental: Boolean,
    titleLifeEstate: Boolean,
    titleEncroachments: Boolean,
    titlePrivateRoad: Boolean,
    titleRightOfWayEasements: Boolean,
    titleWrittenAgreements: Boolean,
    titleStudy: Boolean,
    titleAssessments: Boolean,
    titleZoningViolations: Boolean,
    sellerCount: Boolean,
    sellerState: Boolean,
    sellerCity: Boolean,
    sellerAddress: Boolean,
    seller2Name: Boolean,
    sellerZip: Boolean,
    seller1Name: Boolean,
    sellerOccupyingNo: Boolean,
    sellerOccupyingYes: Boolean,
});
exports.Addenda17Model = mongoose_2.default.model("Addenda17", exports.SellerDisclosureDataSchema);
//# sourceMappingURL=mongo.js.map