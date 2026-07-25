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

    public start(): void {

        Logger.line();

        Logger.info(Version.APPLICATION_NAME);

        Logger.info(
            `Version ${Version.VERSION}`
        );

        Logger.line();

        Logger.empty();

        this.providers.initialize();

        Logger.info("Application started.");

        this.modules.initialize();

    }

    public stop(): void {

        Logger.empty();

        Logger.info("Stopping application...");

        this.modules.shutdown();

        this.providers.shutdown();

    }

}