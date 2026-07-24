import { AIProvider } from "../contracts/AIProvider.js";

export class ProviderRegistry {

    private readonly providers = new Map<string, AIProvider>();

    public register(provider: AIProvider): void {

        if (this.providers.has(provider.id)) {

            throw new Error(
                `Provider '${provider.id}' is already registered.`
            );

        }

        this.providers.set(
            provider.id,
            provider
        );

    }

    public get(id: string): AIProvider {

        const provider = this.providers.get(id);

        if (!provider) {

            throw new Error(
                `Provider '${id}' is not registered.`
            );

        }

        return provider;

    }

    public has(id: string): boolean {

        return this.providers.has(id);

    }

    public getAll(): AIProvider[] {

        return [...this.providers.values()];

    }

}