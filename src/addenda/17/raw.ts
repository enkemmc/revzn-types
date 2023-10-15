import { DeepPartial } from "../../common";
const fields = {
  "title_table": {
    "kind": "object",
    "properties": {
      "Title_AuthorityToSell": {
        "kind": "object",
        "properties": {}
      },
      "Title_FirstRightOfRefusal": {
        "kind": "object",
        "properties": {}
      },
      "Title_Option": {
        "kind": "object",
        "properties": {}
      },
      "Title_LeaseOrRental": {
        "kind": "object",
        "properties": {}
      },
      "Title_LifeEstate": {
        "kind": "object",
        "properties": {}
      },
      "Title_Encroachments": {
        "kind": "object",
        "properties": {}
      },
      "Title_PrivateRoad": {
        "kind": "object",
        "properties": {}
      },
      "Title_Rights-of-Way_Easements": {
        "kind": "object",
        "properties": {}
      },
      "Title_WrittenAgreements": {
        "kind": "object",
        "properties": {}
      },
      "Title_Study": {
        "kind": "object",
        "properties": {}
      },
      "Title_Assessments": {
        "kind": "object",
        "properties": {}
      },
      "Title_ZoningViolations": {
        "kind": "object",
        "properties": {}
      }
    }
  },
  "seller_state": {
    "kind": "string",
    "confidence": 0.512
  },
  "seller1_name": {
    "kind": "string",
    "confidence": 0.533
  },
  "seller2_name": {
    "kind": "string",
    "confidence": 0.554
  },
  "seller_zip": {
    "kind": "string",
    "confidence": 0.534
  },
  "seller_city": {
    "kind": "string",
    "confidence": 0.488
  },
  "seller_occupying_yes": {
    "kind": "selectionMark",
    "confidence": 0.294
  },
  "seller_occupying_no": {
    "kind": "selectionMark",
    "confidence": 0.298
  },
  "seller_address": {
    "kind": "string",
    "confidence": 0.474
  },
  "seller_count": {
    "kind": "string",
    "confidence": 0.511
  }
}

export type RawSellerDisclosureDocument = DeepPartial<typeof fields>;
