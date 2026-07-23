import { Runtime } from "../runtime/Runtime";

export class Bootstrap {

    public start(): void {

        const runtime = new Runtime();

        runtime.start();

        process.on("SIGINT", () => {

            runtime.stop();

            process.exit(0);

        });

    }

}