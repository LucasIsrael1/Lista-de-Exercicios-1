const prompt = require("prompt-sync")();

console.log("2. Calculadora de porcentagem de votos");

const votosTotais = promptInt("Insira a quantidade total de eleitores: ");
const votosBrancos = promptInt("Insira a quantidade de votos brancos: ");
const votosNulos = promptInt("Insira a quantidade de votos nulos: ");
const votosVálidos = promptInt("Insira a quantidade de votos válidos: ");

const votosBrancosPorcentagem = votosBrancos * 100 / votosTotais;
const votosNulosPorcentagem = votosNulos * 100 / votosTotais;
const votosVálidosPorcentagem = votosVálidos * 100 / votosTotais;

console.log(`> Dos ${votosTotais} votos obtidos:`);
console.log(`> ${votosBrancosPorcentagem}% foram brancos`);
console.log(`> ${votosNulosPorcentagem}% foram nulos`);
console.log(`> ${votosVálidosPorcentagem}% foram válidos`);

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}