export class Counter {
    private _name: string
    private _count: number

    constructor(name: string, count: number) {
        this._name = name;
        this._count = count;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
