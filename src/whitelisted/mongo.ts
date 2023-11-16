import mongoose from "mongoose";

type temp = mongoose.InferSchemaType<typeof WhitelistSchema>;
type WhitelistData = temp & {
  _id: string;
  email: string;
};

const WhitelistSchema = new mongoose.Schema({
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

type WhitelistDocument = WhitelistData & mongoose.Document;
const WhitelistModel = mongoose.model<WhitelistData>(
  "Whitelist",
  WhitelistSchema
);

export { WhitelistDocument, WhitelistModel, WhitelistSchema, WhitelistData };
