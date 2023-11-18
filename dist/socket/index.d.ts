export type IBundleParseEvent = IPsaParsingFailed | IPsaParsingCompleted | IAddendaParsingFailed | IAddendaParsingCompleted | IFetchingPDF | IParsingPSA | IParsingAddenda;
export declare enum BundleParseEventType {
    PSA_FAILED = "PSA_FAILED",
    PSA_COMPLETED = "PSA_COMPLETED",
    FETCHING_PDF = "FETCHING_PDF",
    PARSING_PSA = "PARSING_PSA",
    PARSING_ADDENDA = "PARSING_ADDENDA",
    ADDENDA_FAILED = "ADDENDA_FAILED",
    ADDENDA_COMPLETED = "ADDENDA_COMPLETED"
}
export interface IPsaParsingFailed {
    status: BundleParseEventType.PSA_FAILED;
    message: string;
    data?: never;
}
export interface IPsaParsingCompleted {
    status: BundleParseEventType.PSA_COMPLETED;
    message: "PSA parsing completed.";
    data?: never;
}
export interface IAddendaParsingFailed {
    status: BundleParseEventType.ADDENDA_FAILED;
    message: string;
    data?: never;
}
export interface IAddendaParsingCompleted {
    status: BundleParseEventType.ADDENDA_COMPLETED;
    message: "Addenda parsing completed.";
    data?: never;
}
export interface IFetchingPDF {
    status: BundleParseEventType.FETCHING_PDF;
    message: "Fetching PDF.";
    data?: never;
}
export interface IParsingPSA {
    status: BundleParseEventType.PARSING_PSA;
    message: "Parsing PSA.";
    data?: never;
}
export interface IParsingAddenda {
    status: BundleParseEventType.PARSING_ADDENDA;
    message: string;
    data?: never;
}
export declare enum SocketChannels {
    PSA = "psa",
    ADDENDA = "addenda"
}
