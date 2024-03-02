const CajaTexto = document.querySelector(".CajaTexto");
const CajaTextoSegunda = document.querySelector(".CajaTextoSegunda");


const matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

// funcion de Encriptar

function BotonEncriptar() {
        const texto = Encriptar(CajaTexto.value) ;
        CajaTextoSegunda.value = texto;   
    }

function Encriptar(FraseEncriptar) {


        for (let i = 0; i < matriz.length; i++) {
        if (FraseEncriptar.includes (matriz[i][0])){
            FraseEncriptar=FraseEncriptar.replaceAll(
                matriz[i][0],
                matriz[i][1]);
                   
        }   
    }
    return FraseEncriptar;

    }
   
    // funcion de desencriptar

    function BotonDesencriptar() {
        const texto = Desencriptar(CajaTexto.value) ;
        CajaTextoSegunda.value = texto;
    }

    function Desencriptar(FraseDesencriptar) {
        for (let i = 0; i < matriz.length; i++) {
        if (FraseDesencriptar.includes (matriz[i][1])){
            FraseDesencriptar=FraseDesencriptar.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
        }
    }
    return FraseDesencriptar;
    }


// Funcion de Boton de Copiar

function read(){
    let mensaje = document.querySelector("#TextoEncriptado").value
    return mensaje
}

async function Copiar(){
    let encriptado = read()
    await navigator.clipboard.writeText(encriptado)
    }

    let copiado = document.querySelector("#btncopiar")

     copiado.addEventListener('click',Copiar)

// Funcion ocultar msj de "ningun mensaje encontrado"


function Ocultar(){
    document.getElementById("Msj").style.display = "none";
}

// Al cambio del contenido del textarea refrescar si esta vacio.
$("#TextoEncriptado").on("change", function(){
    if(!this.value){ 
       
        let refresh = document.getElementById('MensajeEncriptado');
        refresh.addEventListener('change', _ => {
                   location.reload();
        })
    }
  });
  


