export type IBundleParseEvent =
  | IParsingFailed
  | IFetchingPDF
  | IParsingAddenda
  | IParsingCompleted
  | IParsingPSA;

export enum BundleParseEventType {
  FETCHING_PDF = "FETCHING_PDF",
  PARSING_PSA = "PARSING_PSA",
  PARSING_ADDENDA = "PARSING_ADDENDA",
  FAILED = "FAILED",
  COMPLETED = "COMPLETED",
}

export interface IFetchingPDF {
  type: SocketChannels.PSA;
  status: BundleParseEventType.FETCHING_PDF;
  message: "Fetching PDF.";
  data?: never;
}

export interface IParsingFailed {
  type: SocketChannels;
  status: BundleParseEventType.FAILED;
  message: string;
  data?: never;
}

export interface IParsingPSA {
  type: SocketChannels.PSA;
  status: BundleParseEventType.PARSING_PSA;
  message: "Parsing PSA.";
  data?: never;
}

export interface IParsingAddenda {
  type: SocketChannels.ADDENDA;
  status: BundleParseEventType.PARSING_ADDENDA;
  message: string;
  data?: never;
}

export interface IParsingCompleted {
  type: SocketChannels;
  status: BundleParseEventType.COMPLETED;
  message: "Parsing completed.";
  data?: never;
}

export enum SocketChannels {
  PSA = "psa",
  ADDENDA = "addenda",
}
