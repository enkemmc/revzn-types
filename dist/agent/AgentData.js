"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.AgentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        default: null,
    },
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
    password: {
        type: String,
    },
    image: {
        type: String,
        default: null,
    },
    primaryColor: {
        type: String,
    },
    secondaryColor: {
        type: String,
    },
    logoImage: {
        type: String,
        default: null,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    socialId: {
        type: String,
    },
    loginType: {
        type: String,
    },
    token: {
        type: String,
    },
    listings: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Listing",
        },
    ],
}, { timestamps: true });
//# sourceMappingURL=AgentData.js.map