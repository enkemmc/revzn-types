import mongoose from "mongoose";

export type ListingData = {
  id?: string;
  streetAddress: string;
  buyers: string[];
};

export const ListingSchema = new mongoose.Schema({
  streetAddress: { type: String, required: true },
  mlsNumber: { type: Number, required: true },
  buyers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
    },
  ],
});

export const ListingModel = mongoose.model<ListingData>("Listing", ListingSchema);
export type ListingDocument = ListingData & mongoose.Document;
