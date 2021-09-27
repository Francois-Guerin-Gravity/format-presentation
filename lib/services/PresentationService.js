"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const type_1 = require("../type");
let PresentationService = class PresentationService {
    formatPresentation(presentation) {
        const formattedPresentation = {
            holder: "",
            credentials: [],
        };
        formattedPresentation.holder = presentation.params[0].holder;
        presentation.params[0].verifiableCredential.forEach((credential) => {
            if (credential.credentialSubject.hasOwnProperty("firstName")) {
                const credentialFormatted = {
                    type: type_1.CredentialType.IDENTITY,
                    issuer: credential.issuer,
                    data: credential.credentialSubject,
                };
                return formattedPresentation.credentials.push(credentialFormatted);
            }
            if (credential.credentialSubject.hasOwnProperty("distributor")) {
                const credentialFormatted = {
                    type: type_1.CredentialType.BUSINESSINFO,
                    issuer: credential.issuer,
                    data: credential.credentialSubject,
                };
                return formattedPresentation.credentials.push(credentialFormatted);
            }
            if (credential.credentialSubject.hasOwnProperty("MPesaStatement")) {
                const credentialFormatted = {
                    type: type_1.CredentialType.MPESASTATEMENT,
                    issuer: credential.issuer,
                    data: credential.credentialSubject,
                };
                return formattedPresentation.credentials.push(credentialFormatted);
            }
            else {
                const credentialFormatted = {
                    type: type_1.CredentialType.OTHER,
                    issuer: credential.issuer,
                    data: credential.credentialSubject,
                };
                return formattedPresentation.credentials.push(credentialFormatted);
            }
        });
        return formattedPresentation;
    }
};
PresentationService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], PresentationService);
exports.default = PresentationService;
//# sourceMappingURL=PresentationService.js.map