import PresentationService from "../../services/PresentationService";
import { BodyParams, Controller, Post } from "@tsed/common";
import { BadRequest, Forbidden } from "@tsed/exceptions";
import { Description, Required, Returns } from "@tsed/schema";
import { Presentation, FormattedPresentation } from "../../type";

@Controller("/v1")
@Description("Controller managing presentation")
@Returns(403, Forbidden)
export default class PresentationController {
  constructor(private readonly presentationService: PresentationService) {}

  @Description("Send a presentation")
  @Post("/presentation")
  @Returns(400, BadRequest)
  send(
    @BodyParams() @Required() presentation: Presentation
  ): FormattedPresentation {
    return this.presentationService.formatPresentation(presentation);
  }
}
