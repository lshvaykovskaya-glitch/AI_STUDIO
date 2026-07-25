import { Logger } from "../logging/Logger.js";
import { ModuleRegistry } from "../modules/ModuleRegistry.js";
import { Version } from "./Version.js";
import { ProviderManager } from "../../../providers/src/manager/ProviderManager.js";

export class App {

    constructor(
        private readonly modules: ModuleRegistry,
        private readonly providers: ProviderManager
    ) {
    }

    public async start(): Promise<void> {

        Logger.line();

        Logger.info(Version.APPLICATION_NAME);

        Logger.info(
            `Version ${Version.VERSION}`
        );

        Logger.line();

        Logger.empty();

        await this.providers.initialize();

        Logger.info("Application started.");

        this.modules.initialize();

    }

    public async stop(): Promise<void> {

        Logger.empty();

        Logger.info("Stopping application...");

        this.modules.shutdown();

        await this.providers.shutdown();

    }

}