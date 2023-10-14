/** Represents a parsed PSA document. */
export type PSAData = {
    date: string;
    mlsNumber: string;
    offerExpirationDate: string;
    earnestMoney: EarnestMoney;
    buyer: string[];
    seller: string[];
    address: Address;
    price: string;
    titleInsuranceCompany: string;
    closingAgentCompany: string;
    closingAgentIndividual: string;
    closingData: {
        date: string;
        onClosing: boolean;
        other: boolean;
        otherText: string;
    };
    servicesOfClosingAgent: {
        requested: boolean;
        waived: boolean;
    };
    chargesDueAfterClosing: ChargesDue;
    sellerCitizenship: Citizenship;
    agencyDisclosure: AgencyDisclosure;
    addenda: AddendaFormTuple[];
    buyerAuthentisign: AuthentiSign;
    sellerAuthentisign: AuthentiSign;
    addendaForms: AddendaForms;
    buyerBrokerageCompensation: string;
    buyerBrokerageAmountInListing: string;
    buyerBrokeragePayOffered: boolean;
    buyerBrokerageOther: boolean;
};
export interface Address {
    street: string;
    city: string;
    county: string;
    state: string;
    zip: string;
}
export type Citizenship = {
    sellerIsNotForeign: boolean;
    sellerIsForeign: boolean;
};
export type ChargesDue = {
    assumedByBuyer: boolean;
    prepaidInFullBySeller: boolean;
};
export type AuthentiSign = {
    signatureOne: string;
    signatureDateOne: string;
    signatureTwo: string;
    signatureDateTwo: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
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
};
export type RepresentedBy = {
    buyerBroker: boolean;
    dualAgent: boolean;
    unrepresented: boolean;
};
export type AgencyDisclosure = {
    buyerRepresentedBy: RepresentedBy;
    sellerRepresentedBy: {
        listingBroker: boolean;
        dualAgent: boolean;
        unrepresented: boolean;
    };
};
export type ClosingData = {
    date: string;
    onClosing: boolean;
    other: boolean;
    otherText: string;
};
export type EarnestMoney = {
    sum: string;
    check: boolean;
    note: boolean;
    wire: boolean;
    other: boolean;
    otherValue: string;
    deliveryDate: string;
    heldByBuyerFirm: boolean;
    heldByClosingAgent: boolean;
};
export type AddendaForms = Partial<{
    "22K": {};
    "22J": {};
    "22E": {};
    "17": {};
    "22A": {};
    "21": {};
    "27": {};
    "28": {};
    "22D": {};
    "34": {};
    "35": {};
    "35W": {};
    "35E": {};
    "36": {};
    "41": {};
    "42": {};
    "42A": {};
    "22EF": {};
    "22T": {};
    "22Y": {};
    "22AD": {};
}>;
export type AddendaFormTuple = [AddendaFormType, string];
export declare enum AddendaFormType {
    "Form22K" = "22K",
    /** Lead paint */
    "Form22J" = "22J",
    "Form22E" = "22E",
    "Form17" = "17",
    "Form22A" = "22A",
    /** Residential PSA */
    "Form21" = "21",
    "Form27" = "27",
    /** Condo PSA */
    "Form28" = "28",
    "Form22D" = "22D",
    "Form34" = "34",
    "Form35" = "35",
    "Form35W" = "35W",
    "Form35E" = "35E",
    "Form36" = "36",
    "Form41" = "41",
    "Form42" = "42",
    "Form42A" = "42A",
    "Form22EF" = "22EF",
    "Form22T" = "22T",
    "Form22Y" = "22Y",
    "Form22AD" = "22AD"
}
