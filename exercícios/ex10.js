const prompt = require("prompt-sync")();

console.log("10. Repetidor simples");

const numero = promptInt("Insira seu número favorito: ");

for (let i = 0; i < 10; i++) {
    console.log(numero);
}

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}