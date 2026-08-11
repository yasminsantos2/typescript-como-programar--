// src/cap-03/accountTeste.ts

import { Account } from "./account.js";
import * as readline from "readline/promises";

// cria o leitor do teclado (equivale ao input do Python)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const conta = new Account();                       // cria o objeto (nasce sem nome)
console.log("Nome inicial:", conta.name);          // undefined → getter

const nome = await rl.question("Digite o nome: "); // espera você digitar
conta.name = nome;                                 // grava → setter
console.log("Nome:", conta.name);                  // mostra → getter

rl.close();                                         // fecha o leitor