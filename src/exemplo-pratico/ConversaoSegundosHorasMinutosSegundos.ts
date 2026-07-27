import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entradaHoras = await rl.question("Digite o tempo em horas: ");
const horas = parseInt(entradaHoras);

const entradaMinutos = await rl.question("Digite o tempo em minutos: ");
const minutos = parseInt(entradaMinutos);

const entradaSegundos = await rl.question("Digite o tempo em segundos: ");
const segundos = parseInt(entradaSegundos);

// Soma tudo, transformando em segundos
const totalSegundos = horas * 3600 + minutos * 60 + segundos;

// Decompõe o total de volta em horas, minutos e segundos
const horasFinais = Math.floor(totalSegundos / 3600);
const minutosFinais = Math.floor((totalSegundos % 3600) / 60);
const segundosFinais = totalSegundos % 60;

console.log(`\nTotal em segundos: ${totalSegundos}`);
console.log(`Isso equivale a: ${horasFinais}h ${minutosFinais}min ${segundosFinais}s`);

rl.close();