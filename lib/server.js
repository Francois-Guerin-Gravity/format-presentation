"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const bodyParser = (0, tslib_1.__importStar)(require("body-parser"));
const compression_1 = (0, tslib_1.__importDefault)(require("compression"));
const rootDir = __dirname;
let Server = class Server {
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    $beforeRoutesInit() {
        this.app
            .use((0, compression_1.default)({}))
            .use(bodyParser.json({ limit: "50mb" }))
            .use(bodyParser.urlencoded({
            extended: true,
        }));
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(),
    (0, tslib_1.__metadata)("design:type", common_1.PlatformApplication)
], Server.prototype, "app", void 0);
(0, tslib_1.__decorate)([
    (0, common_1.Configuration)(),
    (0, tslib_1.__metadata)("design:type", Object)
], Server.prototype, "settings", void 0);
Server = (0, tslib_1.__decorate)([
    (0, common_1.Configuration)({
        rootDir,
        acceptMimes: ["application/json"],
    })
], Server);
exports.Server = Server;
//# sourceMappingURL=server.js.map