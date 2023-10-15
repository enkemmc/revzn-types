"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerDisclosureDataSchema = void 0;
const mongoose_1 = require("mongoose");
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
//# sourceMappingURL=Addenda17.js.map