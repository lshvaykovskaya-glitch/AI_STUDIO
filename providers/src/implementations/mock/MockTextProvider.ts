import { TextProvider } from "../../contracts/TextProvider.js";
import { GenerateTextRequest } from "../../models/GenerateTextRequest.js";
import { GenerateTextResponse } from "../../models/GenerateTextResponse.js";

export class MockTextProvider implements TextProvider {

    public readonly id = "mock";

    public readonly name = "Mock Provider";

    public readonly version = "1.0.0";

    public async initialize(): Promise<void> {
    }

    public async shutdown(): Promise<void> {
    }

    public async generateText(
        request: GenerateTextRequest
    ): Promise<GenerateTextResponse> {

        return {

            text: `Mock response: ${request.prompt}`

        };

    }

}