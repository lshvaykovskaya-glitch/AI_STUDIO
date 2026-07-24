import { Logger } from "../logging/Logger.js";
import { ModuleRegistry } from "../modules/ModuleRegistry.js";
import { Version } from "./Version.js";

export class App {

    constructor(
        private readonly modules: ModuleRegistry
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

        Logger.info("Application started.");

        this.modules.initialize();

    }

    public stop(): void {

        Logger.empty();

        Logger.info("Stopping application...");

        this.modules.shutdown();

    }

}