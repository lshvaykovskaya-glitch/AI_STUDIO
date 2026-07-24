import { AIProvider } from "./AIProvider.js";

export interface ImageProvider extends AIProvider {

    generateImage(
        prompt: string
    ): Promise<string>;

}