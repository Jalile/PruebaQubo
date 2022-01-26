var torre1 = [], torre2 = [], torre3 = [];
var n = 6; // Numero de discos
let movi =0;

const { Console } = require('console');
// codigo para captura de datos
var readline = require('readline');
const internal = require('stream');
var util = require('util');
var leer = readline.createInterface(process.stdin, process.stdout);


initTorres();// Coloca en orden n discos en torre1
imprimir(); // Estado inicial de las torres
leerentrada();


//Cargar primer torre
function initTorres() {
    for(var i = 0; i < n; i++) 
     torre1.push(n - i);
}

//Imprimir los valores
function imprimir(){
    console.log(torre1);
    console.log(torre2);
    console.log(torre3); 
    console.log('Cantidad de movimientos = ' + movi);
}

// leer torre de origen
function leerentrada(){
    leer.question('Escoja la torre de origen', (origen) => {
        if (parseInt(origen)===1){
            leerentradados(torre1); 
        } else if (parseInt(origen)===2){
            leerentradados(torre2);
        }else if (parseInt(origen)===3){
            leerentradados(torre3);
        } else {
            console.log('Escoja un valor del 1 al 3');
            leerentrada();
        }   
    });
}

// leer la torre de destino
function leerentradados (ori){
    leer.question('Escoja la torre de destino', (destino) => {
        if (parseInt(destino)===1){
             ordenar(ori,torres1)
        } else if (parseInt(destino)===2){
            ordenar(ori,torre2)
        }else if (parseInt(destino)===3){
            ordenar(ori,torre3)
        } else {
            console.log('Escoja un valor del 1 al 3');
            leerentradados
        } 
       
    });
}

//validar si se puede o no hacer el movimiento
function ordenar (ori,des){
    movi+=1;
    if (torre3.length===6) {
        console.log("GANANÓ");
    
    }else if ((des.length ===0)||(des[des.length - 1])> (ori[ori.length - 1])){
        des.push(ori.pop()); 
        leerentrada(); 
        imprimir();
    }else if ((des[des.length - 1])< (ori[ori.length - 1])){
        console.log('MOVIMIENTO INVALIDO');
        leerentrada();
        imprimir();
    }else{
        des.push(ori.pop()); 
        leerentrada(); 
        imprimir();
    }

}
   

