// src/cap-03/aluno.ts

export class Aluno {
    private _nome?: string;
    private _nota?: number;

    get nome(): string | undefined {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get nota(): number | undefined {
        return this._nota;
    }
    set nota(nota: number) {
        this._nota = nota;
    }

    // método que USA os atributos (além do get/set)
    situacao(): string {
        if (this._nota !== undefined && this._nota >= 6) {
            return "Aprovado";
        }
        return "Reprovado";
    }
}