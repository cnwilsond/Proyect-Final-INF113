const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const correo = document.getElementById('correo')
const fecha = document.getElementById('fecha')
const hora = document.getElementById('hora')
const boton = document.getElementById('boton')

boton.addEventListener('click', (f) => {
    f.preventDefault()
    const regi = {
        nombres: nombres.value,
        apellidos: apellidos.value,
        correo: correo.value,
        fecha: fecha.value,
        hora: hora.value
    }
    console.log(regi,alert("! GRACIAS POR SU REGISRO ! \nSU CITA YA ESTA PROGRAMADA"));
})
