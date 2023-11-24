"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentModel = exports.AgentSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AgentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        default: "Agent",
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
        default: "https://www.revzn.com/default-user-pic.svg",
    },
    logoImage: {
        type: String,
        default: "https://www.revzn.com/REVZN.svg",
    },
    brokerageImage: {
        type: String,
        default: "https://www.revzn.com/default-brokerage-logo.png",
    },
    primaryColor: {
        type: String,
        default: "#eaf4ae",
    },
    secondaryColor: {
        type: String,
        default: "#aa8ced",
    },
    agentCompany: {
        type: String,
        default: "Company Name",
    },
    brokerageName: {
        type: String,
        default: "Brokerage Name",
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
exports.AgentSchema = AgentSchema;
const AgentModel = mongoose_1.default.model("Agent", AgentSchema);
exports.AgentModel = AgentModel;
//# sourceMappingURL=mongo.js.map