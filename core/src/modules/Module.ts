export interface Module {

    readonly name: string;

    initialize(): void;

    shutdown(): void;

}