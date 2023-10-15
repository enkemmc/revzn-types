import { DeepPartial, Value } from "../../common";
/** JSON map */
export declare enum FIRPTA {
    propertyIAmSeller = "property_i_am_seller",
    propertyAddress = "property_address",
    propertyCity = "property_city",
    propertyState = "property_state",
    propertyZip = "property_zip",
    propertyNoStreetAddress = "property_nostreetaddress",
    buyerCertAmountBelow300k = "buyercert_amountbelow300k",
    buyerCertAmountAbove300k = "buyercert_amountabove300k",
    citizenshipIAm = "citizenship_iam",
    taxpayerIdNumber = "taxpayer_id_number",
    addressMyHomeAddress = "address_myhomeaddress"
}
export type RawFirptaDocument = DeepPartial<{
    fields: {
        [key in FIRPTA]: Value;
    };
}>;
