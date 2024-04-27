const dividendo = 11;
const resto = 5;

console.log("12. Identificador de resto");

for (let i = 1000; i < 2000; i++) {
    if (i % dividendo === resto) {
        console.log(i + " divido por " + dividendo + " tem resto " + resto);
    }
}