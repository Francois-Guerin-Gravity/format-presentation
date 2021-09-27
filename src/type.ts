export type Presentation = {
  jsonrpc: string;
  method: string;
  params: Array<object>;
};

export type Credential = {
  type: string;
  issuer: string;
  data: object;
  created: Date;
  expires: boolean | null;
};

export type FormattedPresentation = {
  holder: string;
  credentials: Array<FormattedCredential | []>;
};

export type FormattedCredential = {
  type: CredentialType;
  issuer: string;
  data: object;
};

export enum CredentialType {
  IDENTITY = "Identity",
  BUSINESSINFO = "BusinessInfo",
  MPESASTATEMENT = "MPesaStatement",
  OTHER = "Complementary data",
}
