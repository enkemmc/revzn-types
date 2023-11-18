"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketChannels = exports.BundleParseEventType = void 0;
var BundleParseEventType;
(function (BundleParseEventType) {
    BundleParseEventType["FETCHING_PDF"] = "FETCHING_PDF";
    BundleParseEventType["PARSING_PSA"] = "PARSING_PSA";
    BundleParseEventType["PARSING_ADDENDA"] = "PARSING_ADDENDA";
    BundleParseEventType["FAILED"] = "FAILED";
    BundleParseEventType["COMPLETED"] = "COMPLETED";
})(BundleParseEventType || (exports.BundleParseEventType = BundleParseEventType = {}));
var SocketChannels;
(function (SocketChannels) {
    SocketChannels["PSA"] = "psa";
    SocketChannels["ADDENDA"] = "addenda";
})(SocketChannels || (exports.SocketChannels = SocketChannels = {}));
//# sourceMappingURL=index.js.map