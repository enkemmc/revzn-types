import mongoose from "mongoose";
type temp = mongoose.InferSchemaType<typeof BetaSignupSchema>;
type BetaSignupData = temp & {
    _id: string;
    email: string;
};
declare const BetaSignupSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
}>> & mongoose.FlatRecord<{
    email: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type BetaSignupDocument = BetaSignupData & mongoose.Document;
declare const BetaSignupModel: mongoose.Model<BetaSignupData, {}, {}, {}, mongoose.Document<unknown, {}, BetaSignupData> & {
    email: string;
} & {
    _id: string;
    email: string;
} & Required<{
    _id: string;
}>, any>;
export { BetaSignupDocument, BetaSignupModel, BetaSignupSchema, BetaSignupData, };
