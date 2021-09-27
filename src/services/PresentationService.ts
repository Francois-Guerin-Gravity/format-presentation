import { Injectable } from "@tsed/common";
import {
  FormattedPresentation,
  FormattedCredential,
  CredentialType,
} from "../type";

@Injectable()
export default class PresentationService {
  formatPresentation(presentation: any): FormattedPresentation {
    const formattedPresentation: FormattedPresentation = {
      holder: "",
      credentials: [],
    };

    formattedPresentation.holder = presentation.params[0].holder;

    presentation.params[0].verifiableCredential.forEach((credential: any) => {
      if (credential.credentialSubject.hasOwnProperty("firstName")) {
        const credentialFormatted: FormattedCredential = {
          type: CredentialType.IDENTITY,
          issuer: credential.issuer,
          data: credential.credentialSubject,
        };
        return formattedPresentation.credentials.push(credentialFormatted);
      }

      if (credential.credentialSubject.hasOwnProperty("distributor")) {
        const credentialFormatted: FormattedCredential = {
          type: CredentialType.BUSINESSINFO,
          issuer: credential.issuer,
          data: credential.credentialSubject,
        };
       return formattedPresentation.credentials.push(credentialFormatted);
      }

      if (credential.credentialSubject.hasOwnProperty("MPesaStatement")) {
        const credentialFormatted: FormattedCredential = {
          type: CredentialType.MPESASTATEMENT,
          issuer: credential.issuer,
          data: credential.credentialSubject,
        };
        return formattedPresentation.credentials.push(credentialFormatted);
      } else {
        const credentialFormatted: FormattedCredential = {
          type: CredentialType.OTHER,
          issuer: credential.issuer,
          data: credential.credentialSubject,
        };
        return formattedPresentation.credentials.push(credentialFormatted);
      }
    });

    return formattedPresentation;
  }
}
