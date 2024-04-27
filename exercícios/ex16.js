const prompt = require("prompt-sync")();

console.log("16. Algorítimo de números primos");

const pontoDePartida = 100;
const quantidadeDePrimos = 50;

let primosEncontrados = 0;
let valor = pontoDePartida;


while (primosEncontrados < quantidadeDePrimos) {
    if(ePrimo(valor)) {
        console.log(valor);
        primosEncontrados += 1;
    };
    valor += 1;
}

function ePrimo(numero) {
    if (numero <= 1) {
        return false;
    };
    const valorMaximo = Math.sqrt(numero);
    for (let i = 2; i <= valorMaximo; i++) {
        if (numero % i === 0) {
            return false;
        };
    };
    return true;
};