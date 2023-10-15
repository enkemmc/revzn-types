import { DeepPartial } from "../../common";
declare const payload: {
    noticetobuyer_sellersacceptance_competingofferbuyer: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_lesscredits: {
        kind: string;
        confidence: number;
    };
    noticetobuyer_sellersacceptance_noticetoseller_notcompeting: {
        kind: string;
        confidence: number;
    };
    noticetobuyer_competingoffer_closingnolaterthandays: {
        kind: string;
        confidence: number;
    };
    noticetobuyer_purchaseprice_newprice: {
        kind: string;
        confidence: number;
    };
    noticetobuyer_purchaseprice_nottoexceed: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_competingoffernetpurchaseprice: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_incorrectcalculation_days: {
        kind: string;
        confidence: number;
    };
    noticetobuyer_sellersacceptance_competingofferdays: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_noticetoseller_termination_days: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_newpurchaseprice: {
        kind: string;
        confidence: number;
    };
    noticetobuyer_sellersacceptance_noticetoseller_sellerterminationdays: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_purchaseprice: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_plusescalation: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_competingoffer_lesscredits: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_pluscredits: {
        kind: string;
        confidence: number;
    };
    newpurchaseprice_competingoffer_pluscredits: {
        kind: string;
        confidence: number;
    };
};
export type RawEscalationDocument = DeepPartial<typeof payload>;
export {};
