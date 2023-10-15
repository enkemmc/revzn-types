import { DeepPartial } from "../../common";
declare const fields: {
    title_table: {
        kind: string;
        properties: {
            Title_AuthorityToSell: {
                kind: string;
                properties: {};
            };
            Title_FirstRightOfRefusal: {
                kind: string;
                properties: {};
            };
            Title_Option: {
                kind: string;
                properties: {};
            };
            Title_LeaseOrRental: {
                kind: string;
                properties: {};
            };
            Title_LifeEstate: {
                kind: string;
                properties: {};
            };
            Title_Encroachments: {
                kind: string;
                properties: {};
            };
            Title_PrivateRoad: {
                kind: string;
                properties: {};
            };
            "Title_Rights-of-Way_Easements": {
                kind: string;
                properties: {};
            };
            Title_WrittenAgreements: {
                kind: string;
                properties: {};
            };
            Title_Study: {
                kind: string;
                properties: {};
            };
            Title_Assessments: {
                kind: string;
                properties: {};
            };
            Title_ZoningViolations: {
                kind: string;
                properties: {};
            };
        };
    };
    seller_state: {
        kind: string;
        confidence: number;
    };
    seller1_name: {
        kind: string;
        confidence: number;
    };
    seller2_name: {
        kind: string;
        confidence: number;
    };
    seller_zip: {
        kind: string;
        confidence: number;
    };
    seller_city: {
        kind: string;
        confidence: number;
    };
    seller_occupying_yes: {
        kind: string;
        confidence: number;
    };
    seller_occupying_no: {
        kind: string;
        confidence: number;
    };
    seller_address: {
        kind: string;
        confidence: number;
    };
    seller_count: {
        kind: string;
        confidence: number;
    };
};
export type RawSellerDisclosureDocument = DeepPartial<typeof fields>;
export {};
