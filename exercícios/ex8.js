const prompt = require("prompt-sync")();

console.log("8. Ordenador de valores");

const valor1 = promptInt("Insira um valor: ");
const valor2 = promptIntDiferente("Insira um valor diferente: ", valor1);

if (valor1 < valor2) {
    console.log(`> ${valor1}, ${valor2}`);
} else {
    console.log(`> ${valor2}, ${valor1}`);
};

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}

function promptIntDiferente(mensagem, outroValor) {
    while(true) {
        const input = promptInt(mensagem);

        if (input != outroValor) {
            return input;
        };
        console.log("Por favor insira um número diferente")
    }
}