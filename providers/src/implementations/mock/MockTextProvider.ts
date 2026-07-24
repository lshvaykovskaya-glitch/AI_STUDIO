import { TextProvider } from "../../contracts/TextProvider.js";

export class MockTextProvider implements TextProvider {

    public readonly id = "mock";

    public readonly name = "Mock Provider";

    public readonly version = "1.0.0";

    public async initialize(): Promise<void> {
    }

    public async shutdown(): Promise<void> {
    }

    public async generateText(
        prompt: string
    ): Promise<string> {

        return `Mock response: ${prompt}`;

    }

}