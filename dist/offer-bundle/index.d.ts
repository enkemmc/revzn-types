import mongoose from "mongoose";
import { AgentData } from "../agent";
import { PSAData } from "../psa";
import { Addenda17Data, AgencyDisclosureData, DownpaymentData, EscalationData, FIRPTAData, FinancingData, InspectionData, LeadData, MultipleBrokersData, OptionalClausesData, TitleData, UtilityData } from "../addenda";
type temp = mongoose.InferSchemaType<typeof OfferBundleSchema>;
type OfferBundleData = Omit<temp, "addenda" | "userId" | "psa"> & {
    _id: string;
    userId: AgentData;
    psa: PSAData;
    pdfPath: string;
    addenda: Record<string, object | null>;
};
type DehydratedOfferBundleData = Omit<temp, "addenda" | "userId" | "psa"> & {
    userId: string;
    id?: string;
    psa: string;
    addenda: Record<string, object | null>;
    pdfPath: string;
};
declare const AddendaToDataMap: {
    readonly "22K": UtilityData;
    readonly "22J": LeadData;
    readonly "22E": FIRPTAData;
    readonly "17": Addenda17Data;
    readonly "22A": FinancingData;
    readonly "21": PSAData;
    readonly "28": PSAData;
    readonly "22D": OptionalClausesData;
    readonly "35": InspectionData;
    readonly "35E": EscalationData;
    readonly "42": AgencyDisclosureData;
    readonly "42A": MultipleBrokersData;
    readonly "22T": TitleData;
    readonly "22AD": DownpaymentData;
};
declare const OfferBundleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    version: number;
    pdfPath: string;
    userId: mongoose.Types.ObjectId;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    version: number;
    pdfPath: string;
    userId: mongoose.Types.ObjectId;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    version: number;
    pdfPath: string;
    userId: mongoose.Types.ObjectId;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
declare const OfferBundleModel: mongoose.Model<OfferBundleData, {}, {}, {}, mongoose.Document<unknown, {}, OfferBundleData> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    version: number;
    pdfPath: string;
    userId: mongoose.Types.ObjectId;
    psa: mongoose.Types.ObjectId;
    addenda?: {
        17: mongoose.Types.ObjectId;
        21: mongoose.Types.ObjectId;
        "22K": mongoose.Types.ObjectId;
        "22J": mongoose.Types.ObjectId;
        "22E": mongoose.Types.ObjectId;
        "22A": mongoose.Types.ObjectId;
        28: mongoose.Types.ObjectId;
        "22D": mongoose.Types.ObjectId;
        35: mongoose.Types.ObjectId;
        "35E": mongoose.Types.ObjectId;
        42: mongoose.Types.ObjectId;
        "42A": mongoose.Types.ObjectId;
        "22T": mongoose.Types.ObjectId;
        "22AD": mongoose.Types.ObjectId;
    } | undefined;
}, "addenda" | "userId" | "psa"> & {
    _id: string;
    userId: AgentData;
    psa: PSAData;
    pdfPath: string;
    addenda: Record<string, object | null>;
} & Required<{
    _id: string;
}>, any>;
type OfferBundleDocument = OfferBundleData & mongoose.Document;
export { OfferBundleSchema, OfferBundleModel, OfferBundleDocument, OfferBundleData, DehydratedOfferBundleData, AddendaToDataMap, };
