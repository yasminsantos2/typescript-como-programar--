// src/cap-03/contaBancaria.ts

export class ContaBancaria {
    private _titular?: string;
    private _saldo: number = 0;    // nasce com zero

    get titular(): string | undefined {
        return this._titular;
    }
    set titular(titular: string) {
        this._titular = titular;
    }

    get saldo(): number {
        return this._saldo;
    }
    // o setter VALIDA: não deixa saldo negativo
    set saldo(valor: number) {
        if (valor < 0) {
            throw new Error("O saldo não pode ser negativo");
        }
        this._saldo = valor;
    }
}