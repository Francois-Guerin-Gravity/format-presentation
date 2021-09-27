import PresentationService from "../../services/PresentationService";
import { Presentation, FormattedPresentation } from "../../type";
export default class PresentationController {
    private readonly presentationService;
    constructor(presentationService: PresentationService);
    send(presentation: Presentation): FormattedPresentation;
}
