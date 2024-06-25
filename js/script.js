function test(){
    let nombre = document.getElementById("nombre-completo");
    let documento = document.getElementById("nro-documento");
    let boton = document.getElementById("btn-busqueda");
    if(nombre.value != "" && documento.value != ""){
        boton.classList.remove('disabled');
    } else {
        boton.classList.add('disabled');
    }
    
}