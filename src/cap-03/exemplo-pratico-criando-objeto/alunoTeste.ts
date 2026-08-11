// src/cap-03/alunoTeste.ts

import { Aluno } from "./aluno.js";
import * as readline from "readline/promises";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const aluno = new Aluno();

aluno.nome = await rl.question("Nome do aluno: ");
aluno.nota = Number(await rl.question("Nota (0 a 10): "));

console.log("Aluno:", aluno.nome);
console.log("Nota:", aluno.nota);
console.log("Situação:", aluno.situacao());   // chama o método

rl.close();