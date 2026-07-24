import { AIProvider } from "./AIProvider.js";

export interface TextProvider extends AIProvider {

    generateText(
        prompt: string
    ): Promise<string>;

}