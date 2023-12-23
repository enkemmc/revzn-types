import mongoose from "mongoose";

export interface UploadedFileData {
  type: UploadedFileType;
  filePath: string;
  blobName: string;
  agentId: string;
  offerId: string;
}

// Enum for Uploaded File Types
export enum UploadedFileType {
  Pdf = 0,
}

// Schema for UploadedFile
const UploadedFileSchema = new mongoose.Schema(
  {
    type: {
      type: Number,
      enum: Object.values(UploadedFileType),
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    blobName: {
      type: String,
      required: true,
    },
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
    },
    offerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OfferBundle",
    },
  },
  { timestamps: true }
);

// Create the model
export const UploadedFileModel = mongoose.model<UploadedFileDocument>(
  "UploadedFile",
  UploadedFileSchema
);

export type UploadedFileDocument = UploadedFileData & mongoose.Document;
