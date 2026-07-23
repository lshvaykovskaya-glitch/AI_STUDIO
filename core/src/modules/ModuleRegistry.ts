import { Module } from "./Module";

export class ModuleRegistry {

    private readonly modules: Module[] = [];

    public register(module: Module): void {

        this.modules.push(module);

    }

    public initialize(): void {

        for (const module of this.modules) {
            module.initialize();
        }

    }

    public shutdown(): void {

        for (const module of [...this.modules].reverse()) {
            module.shutdown();
        }

    }

}