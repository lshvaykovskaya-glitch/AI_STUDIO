import { AIProvider } from "./AIProvider.js";

export interface VideoProvider extends AIProvider {

    generateVideo(
        prompt: string
    ): Promise<string>;

}