"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhitelistSchema = exports.WhitelistModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const WhitelistSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        lowercase: true,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email",
        },
        required: [true, "Email is required"],
    },
});
exports.WhitelistSchema = WhitelistSchema;
const WhitelistModel = mongoose_1.default.model("Whitelist", WhitelistSchema);
exports.WhitelistModel = WhitelistModel;
//# sourceMappingURL=mongo.js.map