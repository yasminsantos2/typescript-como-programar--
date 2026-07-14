/// <reference types="node" />
// Soma de dois inteiros digitados pelo usuário.

import * as readline from "readline/promises";

async function main() {
    const entrada = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const numero1 = parseInt(await entrada.question("Digite o primeiro inteiro: "));
    const numero2 = parseInt(await entrada.question("Digite o segundo inteiro: "));

    const soma = numero1 + numero2;  // soma os números

    console.log("A soma é %d", soma);  // exibe a soma

    entrada.close();
}

main();