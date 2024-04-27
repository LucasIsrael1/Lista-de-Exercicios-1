const prompt = require("prompt-sync")();

console.log("1. Conversor de Celsius para Fahrenheit");

const celsius = promptInt("Insira a temperatura (em Celsius): ");
const fahrenheit = celsius * 1.8 + 32;
console.log(`> ${celsius}°C em Fahrenheit são ${fahrenheit}°F`);

// Repetir o prompt até um número válido ser inserido
// Essa função é reutilizada na maioria dos outros exercícios
function promptInt(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));

        if (!isNaN(input)) {
            return input;
        };
        console.log("Por favor insira um número válido")
    }
}