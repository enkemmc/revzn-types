import mongoose from "mongoose";
export interface UploadedFileData {
    type: UploadedFileType;
    filePath: string;
    blobName: string;
    agentId: string;
    offerId: string;
}
export declare enum UploadedFileType {
    Pdf = 0
}
export declare const UploadedFileModel: mongoose.Model<UploadedFileDocument, {}, {}, {}, mongoose.Document<unknown, {}, UploadedFileDocument> & UploadedFileData & mongoose.Document<any, any, any> & {
    _id: mongoose.Types.ObjectId;
}, any>;
export type UploadedFileDocument = UploadedFileData & mongoose.Document;
