export interface AppConfiguration {

    application: {

        name: string;

        version: string;

        environment: string;

    };

}

export interface ProvidersConfiguration {

    providers: {

        default: string;

        enabled: string[];

    };

}

export interface WorkspaceConfiguration {

    workspace: {

        output: string;

        memory: string;

        plugins: string;

    };

}