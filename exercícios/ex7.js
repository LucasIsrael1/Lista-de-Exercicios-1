const prompt = require("prompt-sync")();

console.log("7. O preço da maçã");

const quantidade = promptInt("Insira quantas maçãs deseja comprar: ");
let preco

if (quantidade < 12) {
    preco = quantidade * 0.30;
} else {
    preco = quantidade * 0.25;
}
console.log("> Seu total é R$ " + (Math.floor(preco * 100) / 100).toFixed(2));

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}