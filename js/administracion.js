document.addEventListener("DOMContentLoaded", function(event){
    
    let formulario = document.getElementsByClassName("formulario-edicion")[0];
    formulario.style.height="0px";
    let ocultar_eliminar =  document.getElementById("ocultar_eliminar");
    ocultar_eliminar.style.height="0px";


    let editar = document.getElementsByClassName("sub-opciones")[0].firstElementChild;
    let opcionOcultar = document.getElementsByClassName("sub-opciones")[0].lastElementChild;

    let contador = 0;
    let opcionSelecionada;

    //Eliminar / Ocultar Blog
    let eliminarPost = document.getElementsByClassName("eliminar-administracion")[0];
    let ocultarPost = document.getElementsByClassName("ocultar-administracion")[0];



   elemento = document.getElementsByClassName("card administrar")[0].getElementsByTagName("li");

 
    for(let valor of elemento){
        valor.addEventListener("click", function(){
            opcionSelecionada = this;
            if(elemento.length > 1){
                do{
                    contador = 0;
                    if(elemento[contador].innerHTML != opcionSelecionada.innerHTML){
                        console.log(elemento.length +" == "+ contador);
                        console.log(elemento[contador]);
                        document.getElementsByClassName("card administrar")[0].removeChild(elemento[contador]);
                    }else{
                        contador = 1;
                        console.log("OTRO: " + elemento.length +" == "+ contador);
                        console.log(elemento[contador]);
                        document.getElementsByClassName("card administrar")[0].removeChild(elemento[contador]);
                        
                    }
                }while(elemento.length != 1);
                document.getElementsByClassName("card administrar")[0].style.display="block";
                elemento[0].getElementsByClassName("opcion-unTitulo")[0].className += "  seleccion-administracion";
            }
        });
    }

/***************************************Seleccionar (Ocultar/Eliminar)**********************************************/
    editar.addEventListener("click", function(){
        if(elemento.length == 1){
            ocultar_eliminar.style.height="0px";
            formulario.style.height = formulario.scrollHeight + 'px';
            setTimeout(()=>{formulario.style.height = "unset";}, 100);

            editar.style.backgroundColor = "#00000007";
            opcionOcultar.style.backgroundColor = "unset";
        }
    });
    opcionOcultar.addEventListener("click", function(){
        if(elemento.length == 1){
            formulario.style.height="0px";
            ocultar_eliminar.style.height = ocultar_eliminar.scrollHeight + 'px';
            setTimeout(()=>{ocultar_eliminar.style.height = "unset";}, 100);

            opcionOcultar.style.backgroundColor = "#00000007";
            editar.style.backgroundColor = "unset";
        }
    });

/******************************************************************************************************************/
    eliminarPost.addEventListener("click", function(){
        this.style.backgroundColor ="#d1d1d1";
        ocultarPost.style.backgroundColor ="#297AFF";
    });
    ocultarPost.addEventListener("click", function(){
        this.style.backgroundColor ="#d1d1d1";
        eliminarPost.style.backgroundColor ="rgb(187, 23, 23)";
    });

});