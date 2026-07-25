import { ProviderManager } from "../manager/ProviderManager.js";
import { MockTextProvider } from "../implementations/mock/MockTextProvider.js";

export class ProviderRegistrar {

    public static register(
        providers: ProviderManager
    ): void {

        this.registerMockProviders(
            providers
        );

    }

    private static registerMockProviders(
        providers: ProviderManager
    ): void {

        providers.register(
            new MockTextProvider()
        );

    }

}