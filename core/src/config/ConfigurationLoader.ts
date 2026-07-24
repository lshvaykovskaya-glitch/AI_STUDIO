import { readFileSync } from "node:fs";

export class ConfigurationLoader {

    public load<T>(path: string): T {

        const content = readFileSync(
            path,
            "utf-8"
        );

        return JSON.parse(content) as T;

    }

}