import { AIProvider } from "../contracts/AIProvider.js";
import { ProviderRegistry } from "../registry/ProviderRegistry.js";

export class ProviderManager {

    private readonly registry = new ProviderRegistry();

    public register(provider: AIProvider): void {

        this.registry.register(provider);

    }

    public get(id: string): AIProvider {

        return this.registry.get(id);

    }

    public getAll(): AIProvider[] {

        return this.registry.getAll();

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