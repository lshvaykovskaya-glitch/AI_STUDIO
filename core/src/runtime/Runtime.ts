import { App } from "../app/App.js";
import { ConfigurationService } from "../config/ConfigurationService.js";
import { ServiceContainer } from "../container/ServiceContainer.js";
import { Logger } from "../logging/Logger.js";
import { ModuleRegistry } from "../modules/ModuleRegistry.js";
import { ProviderManager } from "../../../providers/src/manager/ProviderManager.js";

export class Runtime {

    private readonly container: ServiceContainer;

    private readonly modules: ModuleRegistry;

    private readonly configuration: ConfigurationService;

    private readonly providers: ProviderManager;

    private readonly app: App;

    constructor() {

        this.container = new ServiceContainer();

        this.modules = new ModuleRegistry();

        this.configuration = new ConfigurationService();

        this.providers = new ProviderManager();

        this.container.registerInstance(
            ModuleRegistry,
            this.modules
        );

        this.container.registerInstance(
            ConfigurationService,
            this.configuration
        );

        this.container.registerInstance(
            ProviderManager,
            this.providers
        );

        this.app = new App(
            this.modules,
            this.providers
        );

    }

    public async start(): Promise<void> {

        Logger.info("Loading configuration...");

        this.configuration.load();

        Logger.info("Configuration loaded.");

        Logger.empty();

        Logger.info("Starting Runtime...");
        Logger.empty();

        await this.app.start();

    }

    public async stop(): Promise<void> {

        await this.app.stop();

    }

}