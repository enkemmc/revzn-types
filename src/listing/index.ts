import mongoose from "mongoose";
import { BuyerData } from "../buyer";

type temp = mongoose.InferSchemaType<typeof ListingSchema>;
type ListingData = Omit<temp, "buyers"> & {
  _id: string;
  buyers: BuyerData[];
};

type DehydratedListingData = Omit<temp, "buyers"> & {
  buyers: string[];
};

const ListingSchema = new mongoose.Schema({
  streetAddress: { type: String, required: true },
  mlsNumber: { type: Number, required: true },
  buyers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
    },
  ],
});

const ListingModel = mongoose.model<ListingData>("Listing", ListingSchema);
type ListingDocument = ListingData & mongoose.Document;

export {
  DehydratedListingData,
  ListingData,
  ListingSchema,
  ListingModel,
  ListingDocument,
};
