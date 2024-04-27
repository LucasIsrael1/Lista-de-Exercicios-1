const prompt = require("prompt-sync")();

console.log("9. Localizador de Região");

console.log("Códigos de origem:");
console.log("[1] Sul, [2] Norte, [3] Leste, [4] Oeste");
console.log("[5-6] Nordeste, [7-9] Sudeste, [10-20] Centro-Oeste, [25-50] Nordeste");

const codigo = promptInt("Insira o código de origem de seu produto: ");
const regiao = encontrarRegiao(codigo);

if(regiao === "Importado") {
    console.log("> Seu produto é importado");
} else {
    console.log("> Seu produto veio da região " + regiao);
}

function encontrarRegiao(codigo) {
    if (codigo === 1) {
        return "Sul";
    };
    if (codigo === 2) {
        return "Norte";
    };
    if (codigo === 3) {
        return "Leste";
    };
    if (codigo === 4) {
        return "Oeste";
    };
    if (codigo === 5 || codigo === 6 || (codigo >= 25 && codigo <= 50)) {
        return "Nordeste";
    };
    if (codigo >= 7 && codigo <= 9) {
        return "Sudeste";
    };
    if (codigo >= 10 && codigo <= 20) {
        return "Centro-Oeste";
    };
    return "Importado";
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