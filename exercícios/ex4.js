const prompt = require("prompt-sync")();

console.log("4. Verificador de notas");

const nota1 = promptFloat("Insira a nota da primeira avaliação: ");
const nota2 = promptFloat("Insira a nota da segunda avaliação: ");

const media = (nota1 + nota2) / 2

console.log("> Média das notas: " + media);
if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado");
}

function promptFloat(mensagem) {
    while(true) {
        const input = parseFloat(prompt(mensagem));

        if (!isNaN(input) && input >= 0 && input <= 10) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}