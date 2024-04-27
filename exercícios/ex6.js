const prompt = require("prompt-sync")();

console.log("6. Calculadora de triângulos");

const lado1 = promptInt("Insira o tamanho do primeiro lado: ");
const lado2 = promptInt("Insira o tamanho do segundo lado: ");
const lado3 = promptInt("Insira o tamanho do terceiro lado: ");

if ( lado1 >= lado2 + lado3 || lado2 >= lado1 + lado3 || lado3 >= lado1 + lado2 ) {
    console.log("> Os lados inseridos não formam um triângulo");
    return
};
if (lado1 === lado2 && lado2 === lado3) {
    console.log("> Os lados inseridos formam um triângulo equilátero");
    return
};
if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) {
    console.log("> Os lados inseridos formam um triângulo isóceles");
    return
};

console.log("> Os lados inseridos formam um triângulo escaleno")

function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}