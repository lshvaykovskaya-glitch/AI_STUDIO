import { Logger } from "../logging/Logger";
import { ModuleRegistry } from "../modules/ModuleRegistry";
import { Version } from "./Version";

export class App {

    constructor(
        private readonly modules: ModuleRegistry
    ) {}

    public start(): void {

        Logger.line();
        Logger.info(Version.APPLICATION_NAME);
        Logger.info(`Version ${Version.VERSION}`);
        Logger.line();
        Logger.empty();

        Logger.info("Application started.");

        this.modules.initialize();

    }

    public stop(): void {

        Logger.empty();

        Logger.info("Shutting down...");

        this.modules.shutdown();

    }

}