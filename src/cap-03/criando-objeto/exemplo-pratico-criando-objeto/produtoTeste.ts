// src/cap-03/produtoTeste.ts

import { Produto } from "./produto.js";
import * as readline from "readline/promises";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const produto = new Produto();

produto.nome = await rl.question("Nome do produto: ");

// o teclado sempre devolve TEXTO; Number(...) converte pra número
const precoDigitado = await rl.question("Preço do produto: ");
produto.preco = Number(precoDigitado);

console.log("Produto:", produto.nome);
console.log("Preço:", produto.preco);

rl.close();