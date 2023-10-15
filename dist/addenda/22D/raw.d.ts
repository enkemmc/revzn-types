import { Value, DeepPartial } from "../../common";
export declare enum OptionalClausesFieldMap {
    squareFootageChecked = "squarefootage_checked",
    titleInsuranceStandardChecked = "titleinsurancestandard_checked",
    titleInsuranceExtendedChecked = "titleinsuranceextended_checked",
    sellerCleaningChecked = "sellercleaning_checked",
    personalPropertyChecked = "personalproperty_checked",
    utilitiesChecked = "utilities_checked",
    insulationChecked = "insulation_checked",
    leasedPropertyReviewChecked = "leasedpropertyreview_checked",
    hoaReviewChecked = "hoareview_checked",
    hoaTransferChecked = "hoatransfer_checked",
    excludedItemsChecked = "excludeditems_checked",
    homeWarrantyChecked = "homewarranty_checked",
    otherChecked = "other_checked"
}
export type RawOptionalClausesDocument = DeepPartial<{
    fields: {
        [key in OptionalClausesFieldMap]: Value;
    };
}>;
