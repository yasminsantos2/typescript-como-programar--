// src/cap-03/contaBancariaTeste.ts

import { ContaBancaria } from "./contaBancaria.js";
import * as readline from "readline/promises";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const conta = new ContaBancaria();

conta.titular = await rl.question("Titular da conta: ");

const valor = Number(await rl.question("Saldo inicial: "));

// try/catch: tenta gravar; se o setter recusar, mostra o erro
try {
    conta.saldo = valor;
    console.log("Titular:", conta.titular);
    console.log("Saldo:", conta.saldo);
} catch (erro) {
    console.log("Erro:", (erro as Error).message);
}

rl.close();