const prompt = require("prompt-sync")();

console.log("14. Calculadora de média");

let valor = 0;
let quantidade = 0;

while(true) {
    const input = parseFloat(prompt("Insira um número: "));

    if (input === 0) {
        break;
    };
    if (isNaN(input)) {
        console.log("Por favor insira um número válido");
        continue;
    };
    valor += input;
    quantidade += 1;
};

const media = (quantidade === 0) ? 0: valor / quantidade;
console.log("> Sua média é: " + media);