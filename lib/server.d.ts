import { Configuration, PlatformApplication } from "@tsed/common";
export declare class Server {
    app: PlatformApplication;
    settings: Configuration;
    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    $beforeRoutesInit(): void | Promise<any>;
}
