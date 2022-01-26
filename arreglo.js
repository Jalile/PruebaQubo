
   let arreglo = ['A',1,4,5,'C','B',6,8,'G','D',7,3,'F',2];
   var listaNum=[];
   var listaLetras=[];
   
   //verificar si es numero o letra
   function isNum(val){
    return !isNaN(val)
  }

  //recorrer arreglo y asignar al arreglo correspondiente
   arreglo.forEach(function(arreglo, index) {
    if (isNum(arreglo)) {
        listaNum.push(arreglo);
    }else {
        listaLetras.push(arreglo);
    } 
    });

    //ordena los arreglos
    listaNum.sort;
    listaLetras.sort;
    
    // imprime los arreglos
    console.log(listaLetras);
    console.log(listaNum);
 





