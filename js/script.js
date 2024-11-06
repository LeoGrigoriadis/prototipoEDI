let especialidades = ["Clínica Médica","Oncología","Alergia e Inmunología","Dermatología","Reumatología","Hepatología y Alcoholismo","Infectología","Nefrología y Diálisis","Neumonología","Gastroenterología","Endocrinología","Neurología","Neurofisiología","Hematología","Hemoterapia"];
let descripciones = [
    "Ofrecemos atención integral para diagnóstico y tratamiento de diversas enfermedades agudas y crónicas, brindando cuidados personalizados y seguimiento continuo.",
    "Proporcionamos diagnóstico, tratamiento y apoyo para pacientes con cáncer, utilizando las últimas tecnologías y enfoques terapéuticos para mejorar la calidad de vida.",
    "Especialistas en el diagnóstico y tratamiento de alergias y trastornos del sistema inmunológico, ofreciendo terapias personalizadas para mejorar la salud y bienestar.",
    "Cuidamos de tu piel, cabello y uñas, tratando desde condiciones comunes hasta enfermedades complejas con un enfoque especializado y actualizado.",
    "Brindamos atención integral para enfermedades reumáticas y autoinmunes, con tratamientos avanzados para mejorar la movilidad y calidad de vida de nuestros pacientes.",
    "Atención integral para enfermedades hepáticas y tratamiento del alcoholismo, brindando diagnóstico, terapia y apoyo para mejorar la salud del hígado y facilitar la recuperación de los pacientes.",
    "Diagnóstico y tratamiento de enfermedades infecciosas, brindando atención especializada para prevenir y controlar infecciones complejas.",
    "Atención integral para enfermedades renales y tratamientos de diálisis, promoviendo una mejor calidad de vida en pacientes con afecciones renales crónicas.",
    "Evaluación y tratamiento de enfermedades respiratorias, como asma y EPOC, con un enfoque personalizado para mejorar la función pulmonar.",
    "Diagnóstico y tratamiento de trastornos digestivos, ofreciendo un enfoque integral para mejorar la salud y el bienestar digestivo.",
    "Atención especializada en enfermedades hormonales y metabólicas, brindando tratamientos personalizados para el control de diabetes, tiroides y otros trastornos.",
    "Diagnóstico y tratamiento de trastornos del sistema nervioso, con enfoque especializado en la salud cerebral y el bienestar neurológico.",
    "Estudios y diagnósticos de función nerviosa y muscular, utilizando técnicas avanzadas para evaluar y tratar trastornos neuromusculares.",
    "Diagnóstico y tratamiento de enfermedades de la sangre, como anemias y leucemias, con un enfoque en la mejora de la salud hematológica.",
    "Servicios de transfusión y tratamiento con componentes sanguíneos, asegurando una atención segura y adecuada en terapias hemoterápicas."
]
const user = {
    username : "44335769",
    pass : "12345678"
}

function desbloquearBoton(){
    let nombre = document.getElementById("nombre-completo");
    let documento = document.getElementById("nro-documento");
    let archivo = document.getElementById("dni-file");
    let boton = document.getElementById("btn-busqueda");
    
    if(nombre.value != "" && documento.value != "" && archivo.files.length > 0){
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

function revisarDeshabilitado(){
    const buscador = document.getElementById("buscador-especialidades");
    
    if(buscador.value == ""){        
        document.getElementById("disabled-all").classList.add("disabled-all");
        let activeDay = document.getElementsByClassName("active-day");
        if(activeDay.length > 0) activeDay[0].classList.remove("active-day");
        let active = document.getElementsByClassName("active");
        if(active.length > 0) active[0].classList.remove("active");
    } else {    
        document.getElementById("disabled-all").classList.remove("disabled-all");   
    }
}

function setEspecialidad(htmlElement){
    const buscador = document.getElementById("buscador-especialidades");
    buscador.value = htmlElement.textContent;

    localStorage.setItem("especialidad-elegida", htmlElement.value);
    let descripcion = descripciones[htmlElement.value];

    document.getElementById("bloque-descripcion").style.display = "block";
    document.getElementById("texto-descriptivo").innerHTML = "<strong>Especialidad: "+htmlElement.textContent+"</strong> <br>"+descripcion;
    checkConfirmar();
    revisarDeshabilitado();
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
    }
    
    localStorage.setItem("hora", htmlElement.textContent);
    htmlElement.classList.add("active");
    checkConfirmar();
}

function activeDay(htmlElement){
    let elementos = document.getElementsByClassName("active-day");

    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.classList.remove("active-day");
    }
    
    localStorage.setItem("dia", htmlElement.textContent);
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
        
function mostrarEspecialidades(){
    document.getElementById("lista-especialidades").style.display = "block";
    filtrar(document.getElementById("buscador-especialidades"));
}

function ocultarEspecialidades(){
    setTimeout(function(){
        document.getElementById("lista-especialidades").style.display = "none";
    }, 300);
}

function descargarTurno() {
    let turno = document.getElementById("random-number").textContent;
    
    html2canvas(document.querySelector("#a-imprimir"))
    .then(canvas => {
        console.log("Turno descargado con éxito")
        return Canvas2Image.saveAsImage(canvas, null, null, "png", "turno#"+turno);
        },
        console.log("Error al descargar turno")
    );
};

  function iniciarSesion(){
    let dni = document.getElementById("dni");
    let pass = document.getElementById("pass");
    let mensajeError = document.getElementById("mensajeError");

    if((dni.value == user.username) && (pass.value == user.pass)) {
        document.getElementById("loginOK").click();
    } else {
        console.log("error en login")
        dni.classList.add("input-fail");
        pass.classList.add("input-fail");
        mensajeError.classList.remove("d-none");
    }
  }