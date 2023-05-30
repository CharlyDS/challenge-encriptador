var BotonEncriptar = document.querySelector(".btnnencriptar");
var BotonDesencriptar = document.querySelector(".btndesencriptar");
var mugneco = document.querySelector(".contenedormugneco");
var contenedor = document.querySelector(".contenedor parrafo");
var resultado = document.querySelector(".contenedorresultado");

BotonEncriptar.onclick = enciptar;
BotonDesencriptar.onclick = desencriptar;

function enciptar(){
    ocultarAdelante();
    var cajatexto = recupararTexto()
    resultado.textContent = encriptarTexto(cajatexto);

}

function recupararTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value

}

function ocultarAdelante(){
    mugnrco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function eccriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto [i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto [i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto [i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto [i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        } 
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4; 
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3; 
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3; 
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3; 
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const BtnCopiar = document.querySelector(".btncopiar");
BtnCopiar.addEventListener("click", copiar = copiar () => {
    var contenido = document.querySelector(".contenedorresultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})
