import { App } from "../app/App";
import { ServiceContainer } from "../container/ServiceContainer";
import { Logger } from "../logging/Logger";
import { ModuleRegistry } from "../modules/ModuleRegistry";

export class Bootstrap {

    public start(): void {

        Logger.info("Bootstrapping application...");
        Logger.empty();

        const container = new ServiceContainer();

        const modules = new ModuleRegistry();

        container.register("ModuleRegistry", modules);

        const app = new App(modules);

        app.start();

        process.on("SIGINT", () => {
            app.stop();
            process.exit(0);
        });

    }

}