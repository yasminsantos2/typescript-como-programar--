import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entrada = await rl.question("Digite o raio do círculo: ");
const raio = parseFloat(entrada);

// Valida se o raio informado é válido.
if (raio <= 0) {
    console.log("O raio deve ser maior que zero.");
    process.exit();
}

const area = Math.PI * raio ** 2;
const perimetro = 2 * Math.PI * raio;

console.log(`A área do círculo é: ${area.toFixed(2)}`);
console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)}`);

rl.close();