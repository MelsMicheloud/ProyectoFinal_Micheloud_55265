//localstorage formulario

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const dni = document.getElementById("dni")
const fechaNac = document.getElementById("fechaNac")
const email = document.getElementById("correo")
const telefono = document.getElementById("telf")
const obraSocial = document.getElementById("obraSocial")
const especialidadTurno = document.getElementById("espe-turno")

function enviarForm(){
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("dni", dni.value)
    localStorage.setItem("fechaNac", fechaNac.value)
    localStorage.setItem("correo", email.value)
    localStorage.setItem("telf", telefono.value)
    localStorage.setItem("obraSocial", obraSocial.value)
    localStorage.setItem("espe-turno", especialidadTurno.value)
}

let formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements,
boton = document.getElementById('btn');

let validarRadio = function(e){
    if(formulario.os[0].checked == true || formulario.os[1].checked == true) {
    }else{
        alert("Completa el campo Obra social")
        e.preventDefault(); 
    }
};

function fichaPacienteLocal(){
    let nombreLocal = localStorage.getItem("nombre");
    let ApellidoLocal = localStorage.getItem("apellido");
    console.log(nombreLocal + " " + ApellidoLocal);
}


fetch("turno.json")
.then(response =>response.json())
.then(data=>{
    const turnoPac = data.turno;
    
    const diaDisp = document.getElementById("diaDisp");
    
    turnoPac.forEach(pac => {
        const diaTurno = document.createElement("p");
        diaTurno.textContent = `Dia: ${pac.diaTurno}, Hora: ${pac.horaTurno} hs.
        `;
        diaDisp.appendChild(diaTurno);
        let elegir = document.createElement("button")
        elegir.className = "btn-seleccion"
        elegir.innerText = "elegir dia";
        diaTurno.append(elegir);

        elegir.addEventListener("click", validar)
        
    });
    
})


fichaPacienteLocal()    

let validar = function(e) {
    validarRadio(e);
    enviarForm(e);
    e.preventDefault();
    Swal.fire(
        'Gracias por elegirnos',
        'Su turno esta confirmado. Recuerde que para cancelar el turno se debe realizar 24hs antes de la fecha confirmada.',
        'question'
        )
};

