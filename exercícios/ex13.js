const prompt = require("prompt-sync")();

let valor;

console.log("13. Calculador de tabuada");

for (let i = 0; i < 5; i++) {
    valor = promptInt("Insira um valor: ");
    imprimirTabuada(valor);
};
console.log("> Concluído! Tchau-tchau!")

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input) && input > 0) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}

function imprimirTabuada(numero) {
    for (let i = 1; i <= numero; i++) {
        const produto = numero * i;
        console.log(`> ${i} x ${numero} = ${produto}`);
    }
}