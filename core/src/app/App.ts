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

        const providers = this.providers.getAll();

        if (providers.length === 0) {

            Logger.info("Registered providers: none");

        } else {

            Logger.info("Registered providers:");

            for (const provider of providers) {

                Logger.info(
                    ` • ${provider.name} ${provider.version} (${provider.id})`
                );

            }

        }

        Logger.empty();

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