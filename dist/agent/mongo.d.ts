import mongoose from "mongoose";
import { ListingData } from "../listing";
type temp = mongoose.InferSchemaType<typeof AgentSchema>;
type AgentData = Omit<temp, "listings"> & {
    _id: string;
    listings: ListingData[];
};
type DehydratedAgentData = Omit<temp, "listings"> & {
    listings: string[];
};
declare const AgentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
    email: string;
    primaryColor: string;
    secondaryColor: string;
    brokerageName: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    agentLogoImage?: string | undefined;
    brokerageLogoImage?: string | undefined;
    logoImage?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
    email: string;
    primaryColor: string;
    secondaryColor: string;
    brokerageName: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    agentLogoImage?: string | undefined;
    brokerageLogoImage?: string | undefined;
    logoImage?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
    email: string;
    primaryColor: string;
    secondaryColor: string;
    brokerageName: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    agentLogoImage?: string | undefined;
    brokerageLogoImage?: string | undefined;
    logoImage?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type AgentDocument = AgentData & mongoose.Document;
declare const AgentModel: mongoose.Model<AgentData, {}, {}, {}, mongoose.Document<unknown, {}, AgentData> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
    email: string;
    primaryColor: string;
    secondaryColor: string;
    brokerageName: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    agentLogoImage?: string | undefined;
    brokerageLogoImage?: string | undefined;
    logoImage?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}, "listings"> & {
    _id: string;
    listings: ListingData[];
} & Required<{
    _id: string;
}>, any>;
export { AgentData, AgentDocument, AgentSchema, AgentModel, DehydratedAgentData, };
