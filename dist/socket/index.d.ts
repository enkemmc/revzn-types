export type IBundleParseEvent = IPsaParsingFailed | IPsaParsingCompleted | IAddendaParsingFailed | IAddendaParsingCompleted | IFetchingPDF | IParsingPSA | IParsingAddenda | IBundleFailed | IBundleCompleted;
export declare enum BundleParseEventType {
    BUNDLE_FAILED = "BUNDLE_FAILED",
    BUNDLE_COMPLETED = "BUNDLE_COMPLETED",
    PSA_FAILED = "PSA_FAILED",
    PSA_COMPLETED = "PSA_COMPLETED",
    FETCHING_PDF = "FETCHING_PDF",
    PARSING_PSA = "PARSING_PSA",
    PARSING_ADDENDA = "PARSING_ADDENDA",
    ADDENDA_FAILED = "ADDENDA_FAILED",
    ADDENDA_COMPLETED = "ADDENDA_COMPLETED"
}
export interface IBundleFailed {
    status: BundleParseEventType.BUNDLE_FAILED;
    message: string;
    data: {
        bundleId: string;
    };
}
export interface IBundleCompleted {
    status: BundleParseEventType.BUNDLE_COMPLETED;
    message: string;
    data: {
        bundleId: string;
    };
}
export interface IPsaParsingFailed {
    status: BundleParseEventType.PSA_FAILED;
    message: string;
    data: {
        bundleId: string;
    };
}
export interface IPsaParsingCompleted {
    status: BundleParseEventType.PSA_COMPLETED;
    message: "PSA parsing completed.";
    data: {
        bundleId: string;
    };
}
export interface IAddendaParsingFailed {
    status: BundleParseEventType.ADDENDA_FAILED;
    message: string;
    data: {
        bundleId: string;
    };
}
export interface IAddendaParsingCompleted {
    status: BundleParseEventType.ADDENDA_COMPLETED;
    message: "Addenda parsing completed.";
    data: {
        bundleId: string;
    };
}
export interface IFetchingPDF {
    status: BundleParseEventType.FETCHING_PDF;
    message: "Fetching PDF.";
    data: {
        bundleId: string;
    };
}
export interface IParsingPSA {
    status: BundleParseEventType.PARSING_PSA;
    message: "Parsing PSA.";
    data: {
        bundleId: string;
    };
}
export interface IParsingAddenda {
    status: BundleParseEventType.PARSING_ADDENDA;
    message: string;
    data: {
        bundleId: string;
    };
}
