import mongoose, { Document } from "mongoose";
import { OptionalClausesData } from "./parsed";
import { FormCommonProps } from "../../common";
export declare const OptionalClausesDataSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    squareFootageChecked?: boolean | undefined;
    titleInsuranceStandardChecked?: boolean | undefined;
    titleInsuranceExtendedChecked?: boolean | undefined;
    sellerCleaningChecked?: boolean | undefined;
    personalPropertyChecked?: boolean | undefined;
    utilitiesChecked?: boolean | undefined;
    insulationChecked?: boolean | undefined;
    leasedPropertyReviewChecked?: boolean | undefined;
    hoaReviewChecked?: boolean | undefined;
    hoaTransferChecked?: boolean | undefined;
    excludedItemsChecked?: boolean | undefined;
    homeWarrantyChecked?: boolean | undefined;
    otherChecked?: boolean | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    squareFootageChecked?: boolean | undefined;
    titleInsuranceStandardChecked?: boolean | undefined;
    titleInsuranceExtendedChecked?: boolean | undefined;
    sellerCleaningChecked?: boolean | undefined;
    personalPropertyChecked?: boolean | undefined;
    utilitiesChecked?: boolean | undefined;
    insulationChecked?: boolean | undefined;
    leasedPropertyReviewChecked?: boolean | undefined;
    hoaReviewChecked?: boolean | undefined;
    hoaTransferChecked?: boolean | undefined;
    excludedItemsChecked?: boolean | undefined;
    homeWarrantyChecked?: boolean | undefined;
    otherChecked?: boolean | undefined;
}>> & mongoose.FlatRecord<{
    squareFootageChecked?: boolean | undefined;
    titleInsuranceStandardChecked?: boolean | undefined;
    titleInsuranceExtendedChecked?: boolean | undefined;
    sellerCleaningChecked?: boolean | undefined;
    personalPropertyChecked?: boolean | undefined;
    utilitiesChecked?: boolean | undefined;
    insulationChecked?: boolean | undefined;
    leasedPropertyReviewChecked?: boolean | undefined;
    hoaReviewChecked?: boolean | undefined;
    hoaTransferChecked?: boolean | undefined;
    excludedItemsChecked?: boolean | undefined;
    homeWarrantyChecked?: boolean | undefined;
    otherChecked?: boolean | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export type Addenda22DDocument = Document & OptionalClausesData & FormCommonProps;
export declare const Addenda22DModel: mongoose.Model<Addenda22DDocument, {}, {}, {}, mongoose.Document<unknown, {}, Addenda22DDocument> & mongoose.Document<any, any, any> & OptionalClausesData & FormCommonProps & {
    _id: mongoose.Types.ObjectId;
}, any>;
