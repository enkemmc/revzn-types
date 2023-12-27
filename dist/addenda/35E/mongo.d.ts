import mongoose from "mongoose";
import { FormCommonProps } from "../../common";
import { EscalationData } from "./parsed";
declare const EscalationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    pdfId: string;
    noticetobuyerSellersacceptanceCompetingofferbuyer: boolean;
    newpurchasepriceLesscredits: string;
    noticetobuyerSellersacceptanceNoticetosellerNotcompeting: boolean;
    noticetobuyerCompetingofferClosingnolaterthandays: string;
    noticetobuyerPurchasepriceNewprice: string;
    noticetobuyerPurchasepriceNottoexceed: string;
    newpurchasepriceCompetingoffernetpurchaseprice: string;
    newpurchasepriceIncorrectcalculationDays: string;
    noticetobuyerSellersacceptanceCompetingofferdays: string;
    newpurchasepriceNoticetosellerTerminationDays: string;
    newpurchasepriceNewpurchaseprice: string;
    noticetobuyerSellersacceptanceNoticetosellerSellerterminationdays: string;
    newpurchasepricePurchaseprice: string;
    newpurchasepricePlusescalation: string;
    newpurchasepriceCompetingofferLesscredits: string;
    newpurchasepricePluscredits: string;
    newpurchasepriceCompetingofferPluscredits: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    pdfId: string;
    noticetobuyerSellersacceptanceCompetingofferbuyer: boolean;
    newpurchasepriceLesscredits: string;
    noticetobuyerSellersacceptanceNoticetosellerNotcompeting: boolean;
    noticetobuyerCompetingofferClosingnolaterthandays: string;
    noticetobuyerPurchasepriceNewprice: string;
    noticetobuyerPurchasepriceNottoexceed: string;
    newpurchasepriceCompetingoffernetpurchaseprice: string;
    newpurchasepriceIncorrectcalculationDays: string;
    noticetobuyerSellersacceptanceCompetingofferdays: string;
    newpurchasepriceNoticetosellerTerminationDays: string;
    newpurchasepriceNewpurchaseprice: string;
    noticetobuyerSellersacceptanceNoticetosellerSellerterminationdays: string;
    newpurchasepricePurchaseprice: string;
    newpurchasepricePlusescalation: string;
    newpurchasepriceCompetingofferLesscredits: string;
    newpurchasepricePluscredits: string;
    newpurchasepriceCompetingofferPluscredits: string;
}>> & mongoose.FlatRecord<{
    pdfId: string;
    noticetobuyerSellersacceptanceCompetingofferbuyer: boolean;
    newpurchasepriceLesscredits: string;
    noticetobuyerSellersacceptanceNoticetosellerNotcompeting: boolean;
    noticetobuyerCompetingofferClosingnolaterthandays: string;
    noticetobuyerPurchasepriceNewprice: string;
    noticetobuyerPurchasepriceNottoexceed: string;
    newpurchasepriceCompetingoffernetpurchaseprice: string;
    newpurchasepriceIncorrectcalculationDays: string;
    noticetobuyerSellersacceptanceCompetingofferdays: string;
    newpurchasepriceNoticetosellerTerminationDays: string;
    newpurchasepriceNewpurchaseprice: string;
    noticetobuyerSellersacceptanceNoticetosellerSellerterminationdays: string;
    newpurchasepricePurchaseprice: string;
    newpurchasepricePlusescalation: string;
    newpurchasepriceCompetingofferLesscredits: string;
    newpurchasepricePluscredits: string;
    newpurchasepriceCompetingofferPluscredits: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type EscalationDocument = EscalationData & mongoose.Document & FormCommonProps;
declare const Addenda35EModel: mongoose.Model<EscalationDocument, {}, {}, {}, mongoose.Document<unknown, {}, EscalationDocument> & EscalationData & mongoose.Document<any, any, any> & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
export { EscalationSchema, EscalationDocument, Addenda35EModel };
