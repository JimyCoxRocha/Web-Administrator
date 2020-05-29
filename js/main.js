/*De lo que leí. document.addEventListener("DOMContentLoaded", function()) == window.document y
                 window.addEventListener("load", function()) == window.onload En navegadores antiguos puede que nos retornen undefined*/
/*window.attachEvent("onload", function(){ }); por si  nos retornan undefined.*/


/*if(window.addEventListener){

}else if(window.attachEvent){

}*/
//Agregar Errores
let verificarFormatos = (formatos, formato) =>{
    let flag = false;

    for(let i in formatos){
        if( formato == formatos[i]){
            flag = true;
            break;
        }else{
            flag = false;
        }
    }
    
    return flag;
}

let crearHTMLElement= (tipo, mensaje) => {
        let elemento = document.createElement(tipo);
        let contenido = document.createTextNode(mensaje);
        elemento.appendChild(contenido);
        return elemento;
}

let mostrarError = (texto) => {
    if((document.getElementById(texto).parentNode).previousSibling.innerHTML != ("Debe agregar " + texto)){
        elemento = crearHTMLElement("p", "Debe agregar " + texto)
        elemento.className = "error";
        elemento.style.margin = "0rem";
        nodoPadre= document.getElementById(texto).parentNode.parentNode;
        nodoPadre.insertBefore(elemento, document.getElementById(texto).parentNode);
    }
}

let solucionError = (texto) => {
    if((document.getElementById(texto).parentNode).previousSibling.innerHTML == ("Debe agregar " + texto)){
        (document.getElementById(texto).parentNode.parentNode).removeChild((document.getElementById(texto).parentNode).previousSibling)
    }
}

let validarCategoría = (event) => { 
    if((document.getElementById("categoria").value == "")){
        mostrarError("categoria");
        event.preventDefault();
    }else{
        solucionError("categoria");
    }
}

let validarImagen = (event) => { 
    if((document.getElementById("imagen").value == "")){
            mostrarError("imagen");
            event.preventDefault();
    }else{
        solucionError("imagen");
    }
}

let validarTitulo = (event) => { 
    if((document.getElementById("titulo").value == "")){
            mostrarError("titulo");
            event.preventDefault();
    }else{
        solucionError("titulo");
    }
}

let validarTextArea = (event) => { 
    if((document.getElementById("contenido").value == "")){
            mostrarError("contenido");
            event.preventDefault();
    }else{
        solucionError("contenido");
    }
}


document.addEventListener("DOMContentLoaded", function(event){
    /** Validar que se ingrese el archivo visual de la manera correcta **/
    let direccion = 0;
    flag = false;
    let formatosVideo = [".mp4"];
    let formatosImagen = [".png", ".jpg"];

    let imagen = document.getElementById("imagen");
    let categoria = document.getElementById("categoria");
    

    (imagen).addEventListener("click", function(event){
            validarCategoría(event);

            imagen.addEventListener("change", function(){
                if(this.value.length > 0){
                    direccion = ((this.value).lastIndexOf("."));
                    var formato = (this.value).slice(direccion, (this.value).length);
                    
                    if(categoria.value == 4){
                        flag = verificarFormatos(formatosVideo, formato);
                    }else{
                        flag = verificarFormatos(formatosImagen, formato);
                    }


                    if(flag == false){
                        document.getElementById("subir").nextSibling.innerHTML="Formato no válido";
                        document.getElementById("subir").nextSibling.style="margin: 0rem";
                        document.getElementById("subir").nextSibling.className="error";
                    }else{
                        var imagenRuta = (this.value).slice((this.value).lastIndexOf("\\")+1, (this.value).length);

                        document.getElementById("subir").nextSibling.innerHTML=imagenRuta;
                        document.getElementById("subir").nextSibling.style="margin: 0rem";
                        document.getElementById("subir").nextSibling.className="";
                    }
                }
            });
    });

    categoria.addEventListener("change", function(){
        imagen.value="";
        document.getElementById("subir").nextSibling.innerHTML="";
    });

    /************************Validar que el form esté ingresado**********************/

    let titulo = document.getElementById("titulo");


    document.getElementById("submit").addEventListener("click", function(event){
        validarCategoría(event);
        validarImagen(event);
        validarTitulo(event);
        validarTextArea(event);
    });


});