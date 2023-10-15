import { DeepPartial } from "../../common";
declare const payload: {
    fields: {
        brokerrepresents_type: {
            kind: string;
            value: string;
            boundingRegions: {
                pageNumber: number;
                polygon: {
                    x: number;
                    y: number;
                }[];
            }[];
            content: string;
            spans: {
                offset: number;
                length: number;
            }[];
            confidence: number;
        };
        brokerrepresents_name: {
            kind: string;
            value: string;
            boundingRegions: {
                pageNumber: number;
                polygon: {
                    x: number;
                    y: number;
                }[];
            }[];
            content: string;
            spans: {
                offset: number;
                length: number;
            }[];
            confidence: number;
        };
        undersigned1_type: {
            kind: string;
            value: string;
            boundingRegions: {
                pageNumber: number;
                polygon: {
                    x: number;
                    y: number;
                }[];
            }[];
            content: string;
            spans: {
                offset: number;
                length: number;
            }[];
            confidence: number;
        };
        undersigned1_sig: {
            kind: string;
            value: string;
            boundingRegions: {
                pageNumber: number;
                polygon: {
                    x: number;
                    y: number;
                }[];
            }[];
            content: string;
            spans: {
                offset: number;
                length: number;
            }[];
            confidence: number;
        };
        broker_sig: {
            kind: string;
            confidence: number;
        };
        undersigned3_sig: {
            kind: string;
            confidence: number;
        };
        broker_firm_assumedname: {
            kind: string;
            confidence: number;
        };
        undersigned2_type: {
            kind: string;
            confidence: number;
        };
        broker_name: {
            kind: string;
            confidence: number;
        };
        undersigned4_type: {
            kind: string;
            confidence: number;
        };
        undersigned2_sig: {
            kind: string;
            confidence: number;
        };
        undersigned4_sig: {
            kind: string;
            confidence: number;
        };
        undersigned3_type: {
            kind: string;
            confidence: number;
        };
        broker_firm_name: {
            kind: string;
            confidence: number;
        };
    };
};
export type RawAgencyDisclosureDocument = DeepPartial<typeof payload.fields>;
export {};
