//Para lograr capturar la linea de la frase
var readline = require('readline');
var util = require('util');
var leer = readline.createInterface(process.stdin, process.stdout);

// captura la frase
leer.question('Escriba la frase que desea verificar ', (frase) => {
  console.log(verificarpalindromo(frase));
});

function verificarpalindromo(frase) {
  // deletrea la frase
    const nuevafrase = frase.replace(/[\W_]/g, "").toLowerCase();
    // la invierte para ver si cumple
    const invertir = nuevafrase.split("").reverse().join("");
    // valida si es igual invertida que normal
    return nuevafrase === invertir ? "Es palindromo" : "No es palindromo";
  }
  
    
