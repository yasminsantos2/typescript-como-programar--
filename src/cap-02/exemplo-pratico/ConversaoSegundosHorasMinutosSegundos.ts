import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entradaHoras = await rl.question("Digite o tempo em horas: ");
const horas = parseInt(entradaHoras);

// Valida se as horas são válidas.
if (horas < 0) {
    console.log("As horas não podem ser negativas.");
    process.exit();
}


const entradaMinutos = await rl.question("Digite o tempo em minutos: ");
const minutos = parseInt(entradaMinutos);

// Valida se os minutos estão entre 0 e 59.
if (minutos < 0 || minutos > 59) {
    console.log("Os minutos devem estar entre 0 e 59.");
    process.exit();
}

const entradaSegundos = await rl.question("Digite o tempo em segundos: ");
const segundos = parseInt(entradaSegundos);

// Valida se os segundos estão entre 0 e 59.
if (segundos < 0 || segundos > 59) {
    console.log("Os segundos devem estar entre 0 e 59.");
    process.exit();
}

// Soma tudo, transformando em segundos
const totalSegundos = horas * 3600 + minutos * 60 + segundos;

// Decompõe o total de volta em horas, minutos e segundos
const horasFinais = Math.floor(totalSegundos / 3600);
const minutosFinais = Math.floor((totalSegundos % 3600) / 60);
const segundosFinais = totalSegundos % 60;

console.log(`\nTotal em segundos: ${totalSegundos}`);
console.log(`Isso equivale a: ${horasFinais}h ${minutosFinais}min ${segundosFinais}s`);

rl.close();