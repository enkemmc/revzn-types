import mongoose from "mongoose";
import { LeadDataSchema } from "./mongo";
type temp = mongoose.InferSchemaType<typeof LeadDataSchema>;
export type LeadData = temp & {
    _id: string;
};
export {};
