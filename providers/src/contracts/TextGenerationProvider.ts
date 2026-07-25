import { AIProvider } from "./AIProvider.js";
import { GenerateTextRequest } from "../models/GenerateTextRequest.js";
import { GenerateTextResponse } from "../models/GenerateTextResponse.js";

export interface TextGenerationProvider extends AIProvider {

    generateText(
        request: GenerateTextRequest
    ): Promise<GenerateTextResponse>;

}