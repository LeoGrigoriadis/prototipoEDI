function desbloquearBoton(){
    let nombre = document.getElementById("nombre-completo");
    let documento = document.getElementById("nro-documento");
    let boton = document.getElementById("btn-busqueda");
    
    if(nombre.value != "" && documento.value != ""){
        boton.classList.remove('disabled');
    } else {
        boton.classList.add('disabled');
    }
}

function guardarInfo(){
    const nombre = document.getElementById("nombre-completo");
    const documento = document.getElementById("nro-documento");
    
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("documento", documento.value);
}

function setEspecialidad(htmlElement){
    const buscador = document.getElementById("buscador-especialidades");
    console.log(htmlElement.textContent)
    buscador.value = htmlElement.textContent;
    
    localStorage.setItem("especialidad-elegida", htmlElement.value);
}