import { Value, DeepPartial } from "../../common";

export enum LeadFieldMap {
  sellerKnownLead = "seller_known_lead",
  sellerNotKnownLead = "seller_not_known_lead",
  sellerProvidedToBuyer = "seller_provided_to_buyer",
  sellerHasNoReports = "seller_has_no_reports",
  sellerExplanationLead = "seller_explanation_lead",
  sellerReportsExplanation = "seller_reports_explanation",
  buyerAcknowledgementWaived = "buyer_acknowledgement_waived",
  buyerAcknowledgementAccepted = "buyer_acknowledgement_accepted",
  buyerAcknowledgementSatisfied = "buyer_acknowledgement_satisfied",
  buyerAcknowledgementSellersOption = "buyer_acknowledgement_sellersoption",
  buyerAcknowledgementTermination = "buyer_acknowledgement_termination",
  buyerAcknowledgement = "buyer_acknowledgement",
  buyerAcknowledgementReceivedPamphlet = "buyer_acknowledgement_receivedpamplet",
}

export type RawLeadDocument = DeepPartial<{
  fields: {
    [key in LeadFieldMap]: Value;
  };
}>;
