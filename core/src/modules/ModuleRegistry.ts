import { Module } from "./Module.js";

export class ModuleRegistry {

    private readonly modules: Module[] = [];

    public register(
        module: Module
    ): void {

        if (
            this.modules.some(
                item => item.name === module.name
            )
        ) {
            throw new Error(
                `Module '${module.name}' already exists.`
            );
        }

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
