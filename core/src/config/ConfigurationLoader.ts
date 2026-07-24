import { existsSync, readFileSync } from "node:fs";

import { ConfigurationError } from "./ConfigurationError.js";

export class ConfigurationLoader {

    public load<T>(path: string): T {

        if (!existsSync(path)) {

            throw new ConfigurationError(
                `Configuration file not found: ${path}`
            );

        }

        try {

            const content = readFileSync(
                path,
                "utf-8"
            );

            return JSON.parse(content) as T;

        } catch (error) {

            throw new ConfigurationError(
                `Failed to load configuration '${path}': ${
                    error instanceof Error
                        ? error.message
                        : "Unknown error"
                }`
            );

        }

    }

}