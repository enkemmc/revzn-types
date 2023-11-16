import mongoose from "mongoose";

type temp = mongoose.InferSchemaType<typeof WhitelistSchema>;
type WhitelistData = temp & {
  _id: string;
  email: string;
};

const WhitelistSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator: (v: any) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email is required"],
  },
});

type WhitelistDocument = WhitelistData & mongoose.Document;
const WhitelistModel = mongoose.model<WhitelistData>("Agent", WhitelistSchema);

export { WhitelistDocument, WhitelistModel, WhitelistSchema, WhitelistData };
