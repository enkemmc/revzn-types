import mongoose, { Document } from "mongoose";
import { PSAData } from "./PSAData";
export declare const PSASchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    date: string;
    pdfPath: string;
    mlsNumber: string;
    offerExpirationDate: string;
    buyer: string[];
    seller: string[];
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    addenda: string[][];
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
        city: string;
        zip: string;
        signatureOne: string;
        signatureDateOne: string;
        signatureTwo: string;
        signatureDateTwo: string;
        streetAddress: string;
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    date: string;
    pdfPath: string;
    mlsNumber: string;
    offerExpirationDate: string;
    buyer: string[];
    seller: string[];
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    addenda: string[][];
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
        city: string;
        zip: string;
        signatureOne: string;
        signatureDateOne: string;
        signatureTwo: string;
        signatureDateTwo: string;
        streetAddress: string;
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
}>> & mongoose.FlatRecord<{
    date: string;
    pdfPath: string;
    mlsNumber: string;
    offerExpirationDate: string;
    buyer: string[];
    seller: string[];
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    addenda: string[][];
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
        city: string;
        zip: string;
        signatureOne: string;
        signatureDateOne: string;
        signatureTwo: string;
        signatureDateTwo: string;
        streetAddress: string;
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
    _id: mongoose.Types.ObjectId;
}>;
export type PSADocument = PSAData & Document;
export declare const PSAModel: mongoose.Model<PSAData, {}, {}, {}, mongoose.Document<unknown, {}, PSAData> & PSAData & Required<{
    _id: string;
}>, any>;
