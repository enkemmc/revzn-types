import mongoose from "mongoose";
import { OfferBundleData } from "../offer-bundle";

type temp = mongoose.InferSchemaType<typeof BuyerSchema>;
type BuyerData = Omit<temp, "offerBundles"> & {
  offerBundles: OfferBundleData[];
};
type DehydratedBuyerData = Omit<temp, "offerBundles"> & {
  offerBundles: string[];
};

const BuyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  listingKey: { type: String, required: true },
  version: { type: Number, default: 1 },
  offerBundles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OfferBundle",
    },
  ],
});

type BuyerDocument = BuyerData & mongoose.Document;
const BuyerModel = mongoose.model<BuyerData>("Buyer", BuyerSchema);

export {
  DehydratedBuyerData,
  BuyerModel,
  BuyerData,
  BuyerSchema,
  BuyerDocument,
};
