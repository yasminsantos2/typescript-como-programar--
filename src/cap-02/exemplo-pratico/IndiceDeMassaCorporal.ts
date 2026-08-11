import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entradaPeso = await rl.question("Digite o peso em kg: ");
const peso = parseFloat(entradaPeso);

const entradaAltura = await rl.question("Digite a altura em metros: ");
const altura = parseFloat(entradaAltura);

const imc = peso / altura ** 2;

// Classifica o IMC de acordo com o valor calculado.
if (imc < 18.5) {
    console.log(`O Índice de Massa Corporal é: ${imc.toFixed(2)}`);
    console.log("Classificação: Abaixo do peso");
    process.exit();
}

if (imc >= 18.5 && imc < 25) {
    console.log(`O Índice de Massa Corporal é: ${imc.toFixed(2)}`);
    console.log("Classificação: Peso normal");
    process.exit();
}

if (imc >= 25 && imc < 30) {
    console.log(`O Índice de Massa Corporal é: ${imc.toFixed(2)}`);
    console.log("Classificação: Sobrepeso");
    process.exit();
}

if (imc >= 30) {
    console.log(`O Índice de Massa Corporal é: ${imc.toFixed(2)}`);
    console.log("Classificação: Obesidade");
    process.exit();
}