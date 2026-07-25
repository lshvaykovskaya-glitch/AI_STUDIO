import { Runtime } from "../runtime/Runtime.js";

export class Bootstrap {

    public static async start(): Promise<void> {

        const runtime = new Runtime();

        await runtime.start();

        const shutdown = async (): Promise<void> => {

            await runtime.stop();

            process.exit(0);

        };

        process.once("SIGINT", shutdown);
        process.once("SIGTERM", shutdown);

    }

}