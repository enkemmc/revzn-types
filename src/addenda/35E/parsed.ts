enum EscalationFieldMap {
  noticetobuyerSellersacceptanceCompetingofferbuyer = "noticetobuyer_sellersacceptance_competingofferbuyer",
  newpurchasepriceLesscredits = "newpurchaseprice_lesscredits",
  noticetobuyerSellersacceptanceNoticetosellerNotcompeting = "noticetobuyer_sellersacceptance_noticetoseller_notcompeting",
  noticetobuyerCompetingofferClosingnolaterthandays = "noticetobuyer_competingoffer_closingnolaterthandays",
  noticetobuyerPurchasepriceNewprice = "noticetobuyer_purchaseprice_newprice",
  noticetobuyerPurchasepriceNottoexceed = "noticetobuyer_purchaseprice_nottoexceed",
  newpurchasepriceCompetingoffernetpurchaseprice = "newpurchaseprice_competingoffernetpurchaseprice",
  newpurchasepriceIncorrectcalculationDays = "newpurchaseprice_incorrectcalculation_days",
  noticetobuyerSellersacceptanceCompetingofferdays = "noticetobuyer_sellersacceptance_competingofferdays",
  newpurchasepriceNoticetosellerTerminationDays = "newpurchaseprice_noticetoseller_termination_days",
  newpurchasepriceNewpurchaseprice = "newpurchaseprice_newpurchaseprice",
  noticetobuyerSellersacceptanceNoticetosellerSellerterminationdays = "noticetobuyer_sellersacceptance_noticetoseller_sellerterminationdays",
  newpurchasepricePurchaseprice = "newpurchaseprice_purchaseprice",
  newpurchasepricePlusescalation = "newpurchaseprice_plusescalation",
  newpurchasepriceCompetingofferLesscredits = "newpurchaseprice_competingoffer_lesscredits",
  newpurchasepricePluscredits = "newpurchaseprice_pluscredits",
  newpurchasepriceCompetingofferPluscredits = "newpurchaseprice_competingoffer_pluscredits",
}

type EscalationData = {
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
};

export { EscalationFieldMap, EscalationData };
