import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const entrada = await rl.question("Digite o valor em Celsius: ");
const celsius = parseFloat(entrada);

const fahrenheit = (celsius * 9) / 5 + 32;

console.log(`O valor em Fahrenheit é: ${fahrenheit}`);

rl.close();