"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetaSignupSchema = exports.BetaSignupModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BetaSignupSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email",
        },
    },
});
exports.BetaSignupSchema = BetaSignupSchema;
const BetaSignupModel = mongoose_1.default.model("BetaSignup", BetaSignupSchema);
exports.BetaSignupModel = BetaSignupModel;
//# sourceMappingURL=mongo.js.map