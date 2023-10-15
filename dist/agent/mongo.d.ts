import mongoose from "mongoose";
type AgentData = {
    id?: string;
    listings: string[];
    name: string;
    email: string;
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
    logoImage: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
    email: string;
    logoImage: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
    email: string;
    logoImage: string;
    isDeleted: boolean;
    listings: mongoose.Types.ObjectId[];
    token?: string | undefined;
    password?: string | undefined;
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    socialId?: string | undefined;
    loginType?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type AgentDocument = AgentData & mongoose.Document;
declare const AgentModel: mongoose.Model<AgentData, {}, {}, {}, mongoose.Document<unknown, {}, AgentData> & AgentData & {
    _id: mongoose.Types.ObjectId;
}, any>;
export { AgentData, AgentDocument, AgentSchema, AgentModel };
