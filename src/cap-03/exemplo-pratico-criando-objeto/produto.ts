// src/cap-03/produto.ts

export class Produto {
    private _nome?: string;
    private _preco?: number;    // number = qualquer número (int ou decimal)

    get nome(): string | undefined {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number | undefined {
        return this._preco;
    }
    set preco(preco: number) {
        this._preco = preco;
    }
}