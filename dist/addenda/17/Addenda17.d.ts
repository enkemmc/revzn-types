/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { FormCommonProps } from "../../common";
import { Document, Schema } from 'mongoose';
/** Seller Disclosure data. */
export type Addenda17Data = {
    titleAuthorityToSell: boolean;
    titleFirstRightOfRefusal: boolean;
    titleOption: boolean;
    titleLeaseOrRental: boolean;
    titleLifeEstate: boolean;
    titleEncroachments: boolean;
    titlePrivateRoad: boolean;
    titleRightOfWayEasements: boolean;
    titleWrittenAgreements: boolean;
    titleStudy: boolean;
    titleAssessments: boolean;
    titleZoningViolations: boolean;
    sellerCount: boolean;
    sellerState: boolean;
    sellerCity: boolean;
    sellerAddress: boolean;
    seller2Name: boolean;
    sellerZip: boolean;
    seller1Name: boolean;
    sellerOccupyingNo: boolean;
    sellerOccupyingYes: boolean;
};
export type SellerDisclosureDocument = Document & Addenda17Data & FormCommonProps;
export declare const SellerDisclosureDataSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    titleAuthorityToSell?: boolean;
    titleFirstRightOfRefusal?: boolean;
    titleOption?: boolean;
    titleLeaseOrRental?: boolean;
    titleLifeEstate?: boolean;
    titleEncroachments?: boolean;
    titlePrivateRoad?: boolean;
    titleRightOfWayEasements?: boolean;
    titleWrittenAgreements?: boolean;
    titleStudy?: boolean;
    titleAssessments?: boolean;
    titleZoningViolations?: boolean;
    sellerCount?: boolean;
    sellerState?: boolean;
    sellerCity?: boolean;
    sellerAddress?: boolean;
    seller2Name?: boolean;
    sellerZip?: boolean;
    seller1Name?: boolean;
    sellerOccupyingNo?: boolean;
    sellerOccupyingYes?: boolean;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    titleAuthorityToSell?: boolean;
    titleFirstRightOfRefusal?: boolean;
    titleOption?: boolean;
    titleLeaseOrRental?: boolean;
    titleLifeEstate?: boolean;
    titleEncroachments?: boolean;
    titlePrivateRoad?: boolean;
    titleRightOfWayEasements?: boolean;
    titleWrittenAgreements?: boolean;
    titleStudy?: boolean;
    titleAssessments?: boolean;
    titleZoningViolations?: boolean;
    sellerCount?: boolean;
    sellerState?: boolean;
    sellerCity?: boolean;
    sellerAddress?: boolean;
    seller2Name?: boolean;
    sellerZip?: boolean;
    seller1Name?: boolean;
    sellerOccupyingNo?: boolean;
    sellerOccupyingYes?: boolean;
}>> & import("mongoose").FlatRecord<{
    titleAuthorityToSell?: boolean;
    titleFirstRightOfRefusal?: boolean;
    titleOption?: boolean;
    titleLeaseOrRental?: boolean;
    titleLifeEstate?: boolean;
    titleEncroachments?: boolean;
    titlePrivateRoad?: boolean;
    titleRightOfWayEasements?: boolean;
    titleWrittenAgreements?: boolean;
    titleStudy?: boolean;
    titleAssessments?: boolean;
    titleZoningViolations?: boolean;
    sellerCount?: boolean;
    sellerState?: boolean;
    sellerCity?: boolean;
    sellerAddress?: boolean;
    seller2Name?: boolean;
    sellerZip?: boolean;
    seller1Name?: boolean;
    sellerOccupyingNo?: boolean;
    sellerOccupyingYes?: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
