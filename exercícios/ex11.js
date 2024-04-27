const prompt = require("prompt-sync")();

console.log("11. Par ou ímpar?");

while(true) {
    const input = parseInt(prompt("Insira um número inteiro: "));

    if (input < 0 || isNaN(input)) {
        console.log("Valor inválido. Tchau-tchau!");
        break;
    };
    if (input % 2 === 0) {
        console.log("> " + input + " é um número par");
    } else {
        console.log("> " + input + " é um número ímpar");
    };
    
};