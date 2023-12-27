import mongoose from "mongoose";
import { AgencyDisclosureData } from "./parsed";
import { FormCommonProps } from "../../common";

const AgencyDisclosureSchema = new mongoose.Schema({
  pdfId: { type: String, required: true },
  brokerrepresentsType: { type: String, default: null },
  brokerrepresentsName: { type: String, default: null },
  undersigned1Type: { type: String, default: null },
  undersigned1Sig: { type: String, default: null },
  brokerSig: { type: String, default: null },
  undersigned3Sig: { type: String, default: null },
  brokerFirmAssumedname: { type: String, default: null },
  undersigned2Type: { type: String, default: null },
  brokerName: { type: String, default: null },
  undersigned4Type: { type: String, default: null },
  undersigned2Sig: { type: String, default: null },
  undersigned4Sig: { type: String, default: null },
  undersigned3Type: { type: String, default: null },
  brokerFirmName: { type: String, default: null },
});

type AgencyDisclosureDocument = AgencyDisclosureData &
  mongoose.Document &
  FormCommonProps;
const Addenda42Model = mongoose.model<AgencyDisclosureDocument>(
  "Addenda42",
  AgencyDisclosureSchema
);

export { AgencyDisclosureSchema, AgencyDisclosureDocument, Addenda42Model };
