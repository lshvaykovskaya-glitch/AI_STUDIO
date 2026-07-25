import { AIProvider } from "../contracts/AIProvider.js";
import { ProviderRegistry } from "../registry/ProviderRegistry.js";

export class ProviderManager {

    private readonly registry = new ProviderRegistry();

    public register(provider: AIProvider): void {

        this.registry.register(provider);

    }

    public has(id: string): boolean {

        return this.registry.has(id);

    }

    public get(id: string): AIProvider {

        return this.registry.get(id);

    }

    public getAll(): AIProvider[] {

        return this.registry.getAll();

    }

    public getRegisteredCount(): number {

        return this.registry.getAll().length;

    }

    public isEmpty(): boolean {

        return this.getRegisteredCount() === 0;

    }

    public async initialize(): Promise<void> {

        for (const provider of this.registry.getAll()) {

            await provider.initialize();

        }

    }

    public async shutdown(): Promise<void> {

        for (const provider of this.registry.getAll()) {

            await provider.shutdown();

        }

    }

}