export class Logger {

    public static line(): void {

        console.log(
            "========================================"
        );

    }

    public static info(
        message: string
    ): void {

        console.log(message);

    }

    public static warning(
        message: string
    ): void {

        console.warn(message);

    }

    public static error(
        message: string
    ): void {

        console.error(message);

    }

    public static empty(): void {

        console.log();

    }

}