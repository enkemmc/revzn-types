import { Value, DeepPartial } from "../../common";
export declare enum TitleFieldMap {
    titleBuyerDaysFrom = "title_buyerdaysfrom",
    titleSellerDaysFrom = "title_sellerdaysfrom",
    titleFromBuyersReceipt = "title_frombuyersreceipt",
    titleFromBuyersMutualAcceptance = "title_frombuyersmutualacceptance"
}
export type RawTitleDocument = DeepPartial<{
    fields: {
        [key in TitleFieldMap]: Value;
    };
}>;
