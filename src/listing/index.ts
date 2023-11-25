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

enum ListingStatus {
  Active = "active",
  Pending = "pending",
  Sold = "sold",
}

const ListingSchema = new mongoose.Schema({
  streetAddress: { type: String, required: true },
  mlsNumber: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: Object.values(ListingStatus),
    default: ListingStatus.Active,
  },
  pendingCommission: {
    type: Number,
    default: 0,
  },
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
  ListingStatus,
  ListingData,
  ListingSchema,
  ListingModel,
  ListingDocument,
};
