export class Logger {

    public static line(): void {
        console.log("========================================");
    }

    public static info(message: string): void {
        console.log(message);
    }

    public static empty(): void {
        console.log();
    }

}