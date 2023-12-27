import mongoose from "mongoose";
import { FormCommonProps } from "../../common";
import { MultipleBrokersData } from "./parsed";

const MultipleBrokersSchema = new mongoose.Schema({
  pdfId: {
    type: String,
    required: true,
  },
  addBuyerbrokerName: { type: String, default: null },
  addBuyerbrokerMlsoffice: { type: String, default: null },
  addBuyerbrokerMlslag: { type: String, default: null },
  addBuyerbroker2Name: { type: String, default: null },
  addBuyerbrokerBuyerbroker: { type: String, default: null },
  addBuyerbrokerDualagent: { type: String, default: null },
  addBuyerbroker2Buyerbroker: { type: String, default: null },
  addBuyerbroker2Dualagent: { type: String, default: null },
  addListingbrokerListingbroker: { type: String, default: null },
  addListingbrokerDualagent: { type: String, default: null },
  addListingbroker2Listingbroker: { type: String, default: null },
  addListingbroker2Dualagent: { type: String, default: null },
  addListingbroker2Name: { type: String, default: null },
  addListingbroker2Mlsoffice: { type: String, default: null },
  addBuyerbroker2Mlsoffice: { type: String, default: null },
  addListingbrokerMlslag: { type: String, default: null },
  addBuyerbroker2Mlslag: { type: String, default: null },
  addListingbrokerMlsoffice: { type: String, default: null },
  addListingbrokerName: { type: String, default: null },
  addListingbroker2Mlslag: { type: String, default: null },
});

type MultipleBrokersDocument = MultipleBrokersData &
  mongoose.Document &
  FormCommonProps;
const Addenda42AModel = mongoose.model<MultipleBrokersDocument>(
  "Addenda42A",
  MultipleBrokersSchema
);

export { MultipleBrokersSchema, MultipleBrokersDocument, Addenda42AModel };
