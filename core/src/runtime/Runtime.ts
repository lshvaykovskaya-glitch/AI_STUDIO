import { App } from "../app/App.js";
import { ServiceContainer } from "../container/ServiceContainer.js";
import { Logger } from "../logging/Logger.js";
import { ModuleRegistry } from "../modules/ModuleRegistry.js";

export class Runtime {

    private readonly container: ServiceContainer;

    private readonly modules: ModuleRegistry;

    private readonly app: App;

    constructor() {

        this.container = new ServiceContainer();

        this.modules = new ModuleRegistry();

        this.container.registerInstance(
            ModuleRegistry,
            this.modules
        );

        this.app = new App(
            this.modules
        );

    }

    public start(): void {

        Logger.info("Starting Runtime...");
        Logger.empty();

        this.app.start();

    }

    public stop(): void {

        this.app.stop();

    }

}