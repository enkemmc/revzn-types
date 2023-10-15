import mongoose from "mongoose";

export type BuyerData = {
  id: string;
  version: number;
  /** Each version of their offer that a Buyer has sent. */
  offerBundles?: string[];
  name: string;
  /** This is how we determine if a bundle is from a new buyer, or a new version of a bundle that has already been uploaded from the same buyer. */
  listingKey: string;
}

export const BuyerSchema = new mongoose.Schema({
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

export type BuyerDocument = BuyerData & mongoose.Document;
