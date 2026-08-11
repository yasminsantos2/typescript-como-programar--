import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entradaPrincipal = await rl.question("Digite o valor principal: ");
const principal = parseFloat(entradaPrincipal);

// Valida se o valor principal é válido.
if (principal <= 0) {
    console.log("O valor principal deve ser maior que zero.");
    process.exit();
}



const entradaTaxa = await rl.question("Digite a taxa de juros (em decimal): ");
const taxa = parseFloat(entradaTaxa);

// Valida se a taxa de juros é válida.
if (taxa <= 0) {
    console.log("A taxa de juros deve ser maior que zero.");
    process.exit();
}

const entradaPeriodos = await rl.question("Digite o número de períodos: ");
const periodos = parseInt(entradaPeriodos);

// Valida se o número de períodos é válido.
if (periodos <= 0) {
    console.log("O número de períodos deve ser maior que zero.");
    process.exit();
}

const montante = principal * (1 + taxa) ** periodos;

console.log(`O montante é: ${montante.toFixed(2)}`);

rl.close();