import { Schema } from "mongoose";

export const PSASchema = new Schema({
  pdfPath: { type: String, required: true },
  date: { type: String, required: true },
  mlsNumber: { type: String, required: true },
  offerExpirationDate: { type: String, default: "" },

  earnestMoney: {
    sum: { type: String, default: "" },
    check: { type: Boolean, default: false },
    note: { type: Boolean, default: false },
    wire: { type: Boolean, default: false },
    other: { type: Boolean, default: false },
    otherValue: { type: String, default: "" },
    deliveryDate: { type: String, default: "" },
    heldByBuyerFirm: { type: Boolean, default: false },
    heldByClosingAgent: { type: Boolean, default: false },
  },

  buyer: { type: [String], default: [] },
  seller: { type: [String], default: [] },

  address: {
    street: { type: String, default: "" },
    city: { type: String, default: "" },
    county: { type: String, default: "" },
    state: { type: String, default: "" },
    zip: { type: String, default: "" },
  },

  price: { type: String, default: "" },
  titleInsuranceCompany: { type: String, default: "" },
  closingAgentCompany: { type: String, default: "" },
  closingAgentIndividual: { type: String, default: "" },

  closingData: {
    date: { type: String, default: "" },
    onClosing: { type: Boolean, default: false },
    other: { type: Boolean, default: false },
    otherText: { type: String, default: "" },
  },

  servicesOfClosingAgent: {
    requested: { type: Boolean, default: false },
    waived: { type: Boolean, default: false },
  },

  chargesDueAfterClosing: {
    assumedByBuyer: { type: Boolean, default: false },
    prepaidInFullBySeller: { type: Boolean, default: false },
  },

  sellerCitizenship: {
    sellerIsNotForeign: { type: Boolean, default: false },
    sellerIsForeign: { type: Boolean, default: false },
  },

  agencyDisclosure: {
    buyerRepresentedBy: {
      buyerBroker: { type: Boolean, default: false },
      dualAgent: { type: Boolean, default: false },
      unrepresented: { type: Boolean, default: false },
    },
    sellerRepresentedBy: {
      listingBroker: { type: Boolean, default: false },
      dualAgent: { type: Boolean, default: false },
      unrepresented: { type: Boolean, default: false },
    },
  },

  addenda: {
    type: [[String]],
    default: [],
  },

  buyerAuthentisign: {
    signatureOne: { type: String, default: "" },
    signatureDateOne: { type: String, default: "" },
    signatureTwo: { type: String, default: "" },
    signatureDateTwo: { type: String, default: "" },
    streetAddress: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    zip: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    brokerageFirm: { type: String, default: "" },
    broker: { type: String, default: "" },
    firmPhone: { type: String, default: "" },
    firmDocumentEmail: { type: String, default: "" },
    brokerEmail: { type: String, default: "" },
    brokerDolLicenseNum: { type: String, default: "" },
    faxNum: { type: String, default: "" },
    mlsOfficeNum: { type: String, default: "" },
    mlsLagNum: { type: String, default: "" },
    firmFaxNum: { type: String, default: "" },
    brokerPhone: { type: String, default: "" },
    firmDolNum: { type: String, default: "" },
  },

  buyerBrokerageCompensation: { type: String, default: "" },
  buyerBrokerageAmountInListing: { type: String, default: "" },
  buyerBrokeragePayOffered: { type: Boolean, default: false },
  buyerBrokerageOther: { type: Boolean, default: false },
});
