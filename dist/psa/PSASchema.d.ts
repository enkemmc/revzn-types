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
import { Schema } from "mongoose";
export declare const PSASchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    date: string;
    mlsNumber: string;
    pdfPath: string;
    addenda: string[][];
    offerExpirationDate: string;
    buyer: string[];
    seller: string[];
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    buyerBrokerageCompensation: string;
    buyerBrokerageAmountInListing: string;
    buyerBrokeragePayOffered: boolean;
    buyerBrokerageOther: boolean;
    address?: {
        state: string;
        street: string;
        city: string;
        county: string;
        zip: string;
    } | undefined;
    earnestMoney?: {
        sum: string;
        other: boolean;
        check: boolean;
        note: boolean;
        wire: boolean;
        otherValue: string;
        deliveryDate: string;
        heldByBuyerFirm: boolean;
        heldByClosingAgent: boolean;
    } | undefined;
    closingData?: {
        other: boolean;
        date: string;
        onClosing: boolean;
        otherText: string;
    } | undefined;
    servicesOfClosingAgent?: {
        requested: boolean;
        waived: boolean;
    } | undefined;
    chargesDueAfterClosing?: {
        assumedByBuyer: boolean;
        prepaidInFullBySeller: boolean;
    } | undefined;
    sellerCitizenship?: {
        sellerIsNotForeign: boolean;
        sellerIsForeign: boolean;
    } | undefined;
    agencyDisclosure?: {
        buyerRepresentedBy?: {
            buyerBroker: boolean;
            dualAgent: boolean;
            unrepresented: boolean;
        } | undefined;
        sellerRepresentedBy?: {
            dualAgent: boolean;
            unrepresented: boolean;
            listingBroker: boolean;
        } | undefined;
    } | undefined;
    buyerAuthentisign?: {
        state: string;
        email: string;
        streetAddress: string;
        city: string;
        zip: string;
        signatureOne: string;
        signatureDateOne: string;
        signatureTwo: string;
        signatureDateTwo: string;
        phone: string;
        brokerageFirm: string;
        broker: string;
        firmPhone: string;
        firmDocumentEmail: string;
        brokerEmail: string;
        brokerDolLicenseNum: string;
        faxNum: string;
        mlsOfficeNum: string;
        mlsLagNum: string;
        firmFaxNum: string;
        brokerPhone: string;
        firmDolNum: string;
    } | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    date: string;
    mlsNumber: string;
    pdfPath: string;
    addenda: string[][];
    offerExpirationDate: string;
    buyer: string[];
    seller: string[];
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    buyerBrokerageCompensation: string;
    buyerBrokerageAmountInListing: string;
    buyerBrokeragePayOffered: boolean;
    buyerBrokerageOther: boolean;
    address?: {
        state: string;
        street: string;
        city: string;
        county: string;
        zip: string;
    } | undefined;
    earnestMoney?: {
        sum: string;
        other: boolean;
        check: boolean;
        note: boolean;
        wire: boolean;
        otherValue: string;
        deliveryDate: string;
        heldByBuyerFirm: boolean;
        heldByClosingAgent: boolean;
    } | undefined;
    closingData?: {
        other: boolean;
        date: string;
        onClosing: boolean;
        otherText: string;
    } | undefined;
    servicesOfClosingAgent?: {
        requested: boolean;
        waived: boolean;
    } | undefined;
    chargesDueAfterClosing?: {
        assumedByBuyer: boolean;
        prepaidInFullBySeller: boolean;
    } | undefined;
    sellerCitizenship?: {
        sellerIsNotForeign: boolean;
        sellerIsForeign: boolean;
    } | undefined;
    agencyDisclosure?: {
        buyerRepresentedBy?: {
            buyerBroker: boolean;
            dualAgent: boolean;
            unrepresented: boolean;
        } | undefined;
        sellerRepresentedBy?: {
            dualAgent: boolean;
            unrepresented: boolean;
            listingBroker: boolean;
        } | undefined;
    } | undefined;
    buyerAuthentisign?: {
        state: string;
        email: string;
        streetAddress: string;
        city: string;
        zip: string;
        signatureOne: string;
        signatureDateOne: string;
        signatureTwo: string;
        signatureDateTwo: string;
        phone: string;
        brokerageFirm: string;
        broker: string;
        firmPhone: string;
        firmDocumentEmail: string;
        brokerEmail: string;
        brokerDolLicenseNum: string;
        faxNum: string;
        mlsOfficeNum: string;
        mlsLagNum: string;
        firmFaxNum: string;
        brokerPhone: string;
        firmDolNum: string;
    } | undefined;
}>> & import("mongoose").FlatRecord<{
    date: string;
    mlsNumber: string;
    pdfPath: string;
    addenda: string[][];
    offerExpirationDate: string;
    buyer: string[];
    seller: string[];
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    buyerBrokerageCompensation: string;
    buyerBrokerageAmountInListing: string;
    buyerBrokeragePayOffered: boolean;
    buyerBrokerageOther: boolean;
    address?: {
        state: string;
        street: string;
        city: string;
        county: string;
        zip: string;
    } | undefined;
    earnestMoney?: {
        sum: string;
        other: boolean;
        check: boolean;
        note: boolean;
        wire: boolean;
        otherValue: string;
        deliveryDate: string;
        heldByBuyerFirm: boolean;
        heldByClosingAgent: boolean;
    } | undefined;
    closingData?: {
        other: boolean;
        date: string;
        onClosing: boolean;
        otherText: string;
    } | undefined;
    servicesOfClosingAgent?: {
        requested: boolean;
        waived: boolean;
    } | undefined;
    chargesDueAfterClosing?: {
        assumedByBuyer: boolean;
        prepaidInFullBySeller: boolean;
    } | undefined;
    sellerCitizenship?: {
        sellerIsNotForeign: boolean;
        sellerIsForeign: boolean;
    } | undefined;
    agencyDisclosure?: {
        buyerRepresentedBy?: {
            buyerBroker: boolean;
            dualAgent: boolean;
            unrepresented: boolean;
        } | undefined;
        sellerRepresentedBy?: {
            dualAgent: boolean;
            unrepresented: boolean;
            listingBroker: boolean;
        } | undefined;
    } | undefined;
    buyerAuthentisign?: {
        state: string;
        email: string;
        streetAddress: string;
        city: string;
        zip: string;
        signatureOne: string;
        signatureDateOne: string;
        signatureTwo: string;
        signatureDateTwo: string;
        phone: string;
        brokerageFirm: string;
        broker: string;
        firmPhone: string;
        firmDocumentEmail: string;
        brokerEmail: string;
        brokerDolLicenseNum: string;
        faxNum: string;
        mlsOfficeNum: string;
        mlsLagNum: string;
        firmFaxNum: string;
        brokerPhone: string;
        firmDolNum: string;
    } | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
