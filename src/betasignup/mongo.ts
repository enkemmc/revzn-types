import mongoose from "mongoose";

type temp = mongoose.InferSchemaType<typeof BetaSignupSchema>;
type BetaSignupData = temp & {
  _id: string;
  email: string;
};

const BetaSignupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v: any) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
});

type BetaSignupDocument = BetaSignupData & mongoose.Document;
const BetaSignupModel = mongoose.model<BetaSignupData>(
  "BetaSignup",
  BetaSignupSchema
);

export {
  BetaSignupDocument,
  BetaSignupModel,
  BetaSignupSchema,
  BetaSignupData,
};
