const prompt = require("prompt-sync")();

console.log("15. Calculadora de média ponderada");

let valor = 0;
let quantidade = 0;

while (true) {
    const inputValor = promptFloat("Insira um número: ");
    if (inputValor === 0) {
        break;
    };
    const inputPeso = promptFloat("Insira seu peso: ");
    valor += inputValor * inputPeso;
    quantidade += inputPeso;
}

const media = (quantidade === 0) ? 0: valor / quantidade;
console.log("> Sua média ponderada é: " + media)


function promptFloat(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}