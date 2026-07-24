import {
    AppConfiguration,
    ProvidersConfiguration,
    WorkspaceConfiguration
} from "./Configuration.js";

import { ConfigurationLoader } from "./ConfigurationLoader.js";

export class ConfigurationService {

    private readonly loader = new ConfigurationLoader();

    private app!: AppConfiguration;

    private providers!: ProvidersConfiguration;

    private workspace!: WorkspaceConfiguration;

    public load(): void {

        this.app = this.loader.load<AppConfiguration>(
            "./config/app.json"
        );

        this.providers = this.loader.load<ProvidersConfiguration>(
            "./config/providers.json"
        );

        this.workspace = this.loader.load<WorkspaceConfiguration>(
            "./config/workspace.json"
        );

    }

    public reload(): void {

        this.load();

    }

    public getApp(): AppConfiguration {

        return this.app;

    }

    public getProviders(): ProvidersConfiguration {

        return this.providers;

    }

    public getWorkspace(): WorkspaceConfiguration {

        return this.workspace;

    }

}