export class ServiceContainer {

    private readonly instances = new Map<Function, unknown>();

    public registerInstance<T>(
        token: new (...args: never[]) => T,
        instance: T
    ): void {

        if (this.instances.has(token)) {
            throw new Error(
                `Service '${token.name}' is already registered.`
            );
        }

        this.instances.set(token, instance);

    }

    public resolve<T>(
        token: new (...args: never[]) => T
    ): T {

        const instance = this.instances.get(token);

        if (!instance) {
            throw new Error(
                `Service '${token.name}' is not registered.`
            );
        }

        return instance as T;

    }

}