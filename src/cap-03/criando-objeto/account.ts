// src/cap-03/account.ts

export class Account {
    private _name?: string;

    get name(): string | undefined {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}