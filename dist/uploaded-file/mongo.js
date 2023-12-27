"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFileModel = exports.UploadedFileType = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Enum for Uploaded File Types
var UploadedFileType;
(function (UploadedFileType) {
    UploadedFileType[UploadedFileType["Pdf"] = 0] = "Pdf";
})(UploadedFileType || (exports.UploadedFileType = UploadedFileType = {}));
// Schema for UploadedFile
const UploadedFileSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Agent",
        required: true,
    },
    offerId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "OfferBundle",
    },
}, { timestamps: true });
// Create the model
exports.UploadedFileModel = mongoose_1.default.model("UploadedFile", UploadedFileSchema);
//# sourceMappingURL=mongo.js.map