import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entradaPrincipal = await rl.question("Digite o valor principal: ");
const principal = parseFloat(entradaPrincipal);

const entradaTaxa = await rl.question("Digite a taxa de juros (em decimal): ");
const taxa = parseFloat(entradaTaxa);

const entradaPeriodos = await rl.question("Digite o número de períodos: ");
const periodos = parseInt(entradaPeriodos);

const montante = principal * (1 + taxa) ** periodos;

console.log(`O montante é: ${montante.toFixed(2)}`);

rl.close();