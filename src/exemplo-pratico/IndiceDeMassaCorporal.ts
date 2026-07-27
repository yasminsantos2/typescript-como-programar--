import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entradaPeso = await rl.question("Digite o peso em kg: ");
const peso = parseFloat(entradaPeso);

const entradaAltura = await rl.question("Digite a altura em metros: ");
const altura = parseFloat(entradaAltura);

const imc = peso / altura ** 2;

console.log(`O Índice de Massa Corporal é: ${imc.toFixed(2)}`);

rl.close();