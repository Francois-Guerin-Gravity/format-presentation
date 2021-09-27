"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PresentationService_1 = (0, tslib_1.__importDefault)(require("../../services/PresentationService"));
const common_1 = require("@tsed/common");
const exceptions_1 = require("@tsed/exceptions");
const schema_1 = require("@tsed/schema");
let PresentationController = class PresentationController {
    constructor(presentationService) {
        this.presentationService = presentationService;
    }
    send(presentation) {
        return this.presentationService.formatPresentation(presentation);
    }
};
(0, tslib_1.__decorate)([
    (0, schema_1.Description)("Send a presentation"),
    (0, common_1.Post)("/presentation"),
    (0, schema_1.Returns)(400, exceptions_1.BadRequest),
    (0, tslib_1.__param)(0, (0, common_1.BodyParams)()),
    (0, tslib_1.__param)(0, (0, schema_1.Required)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Object)
], PresentationController.prototype, "send", null);
PresentationController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)("/v1"),
    (0, schema_1.Description)("Controller managing presentation"),
    (0, schema_1.Returns)(403, exceptions_1.Forbidden),
    (0, tslib_1.__metadata)("design:paramtypes", [PresentationService_1.default])
], PresentationController);
exports.default = PresentationController;
//# sourceMappingURL=PresentationController.js.map