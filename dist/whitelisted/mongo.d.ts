import mongoose from "mongoose";
type temp = mongoose.InferSchemaType<typeof WhitelistSchema>;
type WhitelistData = temp & {
    _id: string;
    email: string;
};
declare const WhitelistSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
}>> & mongoose.FlatRecord<{
    email: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type WhitelistDocument = WhitelistData & mongoose.Document;
declare const WhitelistModel: mongoose.Model<WhitelistData, {}, {}, {}, mongoose.Document<unknown, {}, WhitelistData> & {
    email: string;
} & {
    _id: string;
    email: string;
} & Required<{
    _id: string;
}>, any>;
export { WhitelistDocument, WhitelistModel, WhitelistSchema, WhitelistData };
