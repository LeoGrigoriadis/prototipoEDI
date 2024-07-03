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
    buscador.value = htmlElement.textContent;

    localStorage.setItem("especialidad-elegida", htmlElement.value);
    let descripcion;

    switch(htmlElement.value){
        case 1: descripcion = "Ofrecemos atención integral para diagnóstico y tratamiento de diversas enfermedades agudas y crónicas, brindando cuidados personalizados y seguimiento continuo."; break;
        case 2: descripcion = "Proporcionamos diagnóstico, tratamiento y apoyo para pacientes con cáncer, utilizando las últimas tecnologías y enfoques terapéuticos para mejorar la calidad de vida."; break;
        case 3: descripcion = "Especialistas en el diagnóstico y tratamiento de alergias y trastornos del sistema inmunológico, ofreciendo terapias personalizadas para mejorar la salud y bienestar."; break;
        case 4: descripcion = "Cuidamos de tu piel, cabello y uñas, tratando desde condiciones comunes hasta enfermedades complejas con un enfoque especializado y actualizado."; break;
        case 5: descripcion = "Brindamos atención integral para enfermedades reumáticas y autoinmunes, con tratamientos avanzados para mejorar la movilidad y calidad de vida de nuestros pacientes."; break;
        case 6: descripcion = "Nos especializamos en el diagnóstico y tratamiento de enfermedades del hígado, ofreciendo cuidados completos y personalizados para cada paciente."; break;
        case 7: descripcion = "Ofrecemos programas de rehabilitación y apoyo para personas con problemas de alcoholismo, enfocados en la recuperación y reintegración social."; break;
    }
    document.getElementById("bloque-descripcion").style.display = "block";
    document.getElementById("texto-descriptivo").innerHTML = "<strong>Especialidad: "+htmlElement.textContent+"</strong> <br>"+descripcion;
    checkConfirmar();
}

function filtrar(htmlElement){
    let filtro = htmlElement.value.toLowerCase();
    let elementos = document.getElementsByClassName("list-group-item");

    if(filtro == ""){
        document.getElementById("bloque-descripcion").style.display = "none";
        checkConfirmar();
    }

    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        if(element.textContent.toLowerCase().includes(filtro)){
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function active(htmlElement){
    let elementos = document.getElementsByClassName("active");
    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.classList.remove("active");
        localStorage.setItem("hora", element.textContent);
    }
    
    htmlElement.classList.add("active");
    checkConfirmar();
}

function activeDay(htmlElement){
    let elementos = document.getElementsByClassName("active-day");

    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.classList.remove("active-day");
        localStorage.setItem("dia", element.textContent);
    }
    
    htmlElement.classList.add("active-day");
    checkConfirmar();
}

function checkConfirmar(){
    let dia = document.getElementsByClassName("active-day");
    let hora = document.getElementsByClassName("active");
    const buscador = document.getElementById("buscador-especialidades");
    const boton = document.getElementById("boton-confirmar");
    
    if(dia.length == 0 || hora.length == 0 || buscador.value == ""){
        boton.classList.add("disabled");
    } else {
        boton.classList.remove("disabled");
    }
}