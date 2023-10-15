import { DeepPartial } from "../../common";
declare const fields: {
    water_info: {
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
    sewer_info: {
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
    irrigation_info: {
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
    garbage_info: {
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
    electric_info: {
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
    gas_info: {
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
    special_info: {
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
    days_provide_info: {
        kind: string;
        confidence: number;
    };
};
export type RawUtilitiesDocument = DeepPartial<typeof fields>;
export {};
