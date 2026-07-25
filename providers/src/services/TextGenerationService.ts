import { GenerateTextRequest } from "../models/GenerateTextRequest.js";
import { GenerateTextResponse } from "../models/GenerateTextResponse.js";
import { TextProvider } from "../contracts/TextProvider.js";

export class TextGenerationService {

    constructor(
        private readonly provider: TextProvider
    ) {
    }

    public async generate(
        prompt: string
    ): Promise<GenerateTextResponse> {

        const request: GenerateTextRequest = {

            prompt

        };

        return this.provider.generateText(
            request
        );

    }

}