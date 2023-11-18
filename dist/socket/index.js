"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketChannels = exports.BundleParseEventType = void 0;
var BundleParseEventType;
(function (BundleParseEventType) {
    BundleParseEventType["PSA_FAILED"] = "PSA_FAILED";
    BundleParseEventType["PSA_COMPLETED"] = "PSA_COMPLETED";
    BundleParseEventType["FETCHING_PDF"] = "FETCHING_PDF";
    BundleParseEventType["PARSING_PSA"] = "PARSING_PSA";
    BundleParseEventType["PARSING_ADDENDA"] = "PARSING_ADDENDA";
    BundleParseEventType["ADDENDA_FAILED"] = "ADDENDA_FAILED";
    BundleParseEventType["ADDENDA_COMPLETED"] = "ADDENDA_COMPLETED";
})(BundleParseEventType || (exports.BundleParseEventType = BundleParseEventType = {}));
var SocketChannels;
(function (SocketChannels) {
    SocketChannels["PSA"] = "psa";
    SocketChannels["ADDENDA"] = "addenda";
})(SocketChannels || (exports.SocketChannels = SocketChannels = {}));
//# sourceMappingURL=index.js.map