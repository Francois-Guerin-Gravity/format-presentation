export declare type Presentation = {
    jsonrpc: string;
    method: string;
    params: Array<object>;
};
export declare type Credential = {
    type: string;
    issuer: string;
    data: object;
    created: Date;
    expires: boolean | null;
};
export declare type FormattedPresentation = {
    holder: string;
    credentials: Array<FormattedCredential | []>;
};
export declare type FormattedCredential = {
    type: CredentialType;
    issuer: string;
    data: object;
};
export declare enum CredentialType {
    IDENTITY = "Identity",
    BUSINESSINFO = "BusinessInfo",
    MPESASTATEMENT = "MPesaStatement",
    OTHER = "Complementary data"
}
