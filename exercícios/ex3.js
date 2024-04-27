const prompt = require("prompt-sync")();

console.log("3. Operações com números inteiros");

let primeiroNumero = promptInt("Insira o primeiro número: ");
let segundoNumero = promptInt("Insira o segundo número: ");
let terceiroNumero = promptInt("Insira o terceiro número: ");
let quartoNumero = promptInt("Insira o quarto número: ");

quartoNumero = primeiroNumero + segundoNumero + terceiroNumero;
primeiroNumero += 25
segundoNumero *= 3
terceiroNumero *= 0.12

console.log("> Resultado:")
console.log("1. " + primeiroNumero);
console.log("2. " + segundoNumero);
console.log("3. " + terceiroNumero);
console.log("4. " + quartoNumero);

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}