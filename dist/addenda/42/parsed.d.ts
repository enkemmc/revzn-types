declare enum AgencyDisclosureFieldMap {
    brokerrepresentsType = "brokerrepresents_type",
    brokerrepresentsName = "brokerrepresents_name",
    undersigned1Type = "undersigned1_type",
    undersigned1Sig = "undersigned1_sig",
    brokerSig = "broker_sig",
    undersigned3Sig = "undersigned3_sig",
    brokerFirmAssumedname = "broker_firm_assumedname",
    undersigned2Type = "undersigned2_type",
    brokerName = "broker_name",
    undersigned4Type = "undersigned4_type",
    undersigned2Sig = "undersigned2_sig",
    undersigned4Sig = "undersigned4_sig",
    undersigned3Type = "undersigned3_type",
    brokerFirmName = "broker_firm_name"
}
type AgencyDisclosureData = {
    brokerrepresentsType: string;
    brokerrepresentsName: string;
    undersigned1Type: string;
    undersigned1Sig: string;
    brokerSig: string;
    undersigned3Sig: string;
    brokerFirmAssumedname: string;
    undersigned2Type: string;
    brokerName: string;
    undersigned4Type: string;
    undersigned2Sig: string;
    undersigned4Sig: string;
    undersigned3Type: string;
    brokerFirmName: string;
};
export { AgencyDisclosureData, AgencyDisclosureFieldMap };
