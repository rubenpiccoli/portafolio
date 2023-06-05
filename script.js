const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
      const textoEncriptado = encriptar(textArea.value);
            mensaje.value= textoEncriptado;
            textArea.value="";
            
}   

function encriptar(stringEncriptada){
             
    if(stringEncriptada==""){
       alert("Ningún Mensaje fue encontrado")
       alert("Ingrese el texto que desees encriptar o desencriptar.")
        
    }else{
        mensaje.style.backgroundImage="none"
    }
              
        let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];
        stringEncriptada= stringEncriptada.toLowerCase();

        /*****Codificar******/
        for( let i=0; i < matrizCodigo.length; i++){
         if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }
       }
       
return stringEncriptada


}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
          mensaje.value= textoEncriptado;
          textArea.value="";
          
}   

function desencriptar(stringDesencriptada){
    if(stringDesencriptada==""){
        alert("Ningún Mensaje fue encontrado")
        alert("Ingrese el texto que desees encriptar o desencriptar.")
         
     }else{
        mensaje.style.backgroundImage="none"
     }
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];
    stringDesencriptada= stringDesencriptada.toLowerCase();

for( let i=0; i < matrizCodigo.length; i++){

     if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
     }
}
return stringDesencriptada

}

////funcion que solo permite letras y numeros sin cacteres especiales////
function soloLetras(e){
    key=e.keyCode || e.Which;
    tecla=String.fromCharCode(key).toString();
   
    letras="abcdefghijklmnñopqrstuvwxyz1234567890";
    especiales=[8,13,32]; // solo permitira tecla enter, retroseso y espacio //
    tecla_especial=false;
    for(var i in especiales){

        if (key ==especiales[i]){
            tecla_especial=true;
            break
        }
    }
    if(letras.indexOf(tecla)== -1 && !tecla_especial){
        alert ("ingresar solo letras minusculas y sin acento");
        return false;
    }
}

function copiar(){
    textArea.value=mensaje.value
    mensaje.value="";

}
