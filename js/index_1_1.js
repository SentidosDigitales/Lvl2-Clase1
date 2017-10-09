/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nroA = +prompt("Ingrese un numero");
var nroB = +prompt("Ingrese otro numero");
var respuesta="";
var calculo=0;
calculo = nroA + nroB;
respuesta = respuesta + "nroA+nroB = " + (calculo);
respuesta += "\n";

calculo = nroA % nroB;
respuesta = respuesta + "nroA%nroB = " + (calculo);
respuesta += "\n";

if(nroA!=nroB){
    calculo="verdadero";
}else{
    calculo="falso";
}
respuesta = respuesta + "nroA!=nroB = " + (calculo);
respuesta += "\n";

if(nroA>=nroB){
    calculo="verdadero";
}else{
    calculo="falso";
}
respuesta = respuesta + "nroA>=nroB = " + (calculo);
respuesta += "\n";

calculo = Math.sqrt(nroA);
respuesta = respuesta + "Raiz de nroA = " + (calculo);
respuesta += "\n";

alert(respuesta);


//Se puede escribir en el documento HTML con document.writeln para que termine con un salto de linea
//o con document.write("</br>"); el tag br es un salto de linea