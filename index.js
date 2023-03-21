const id = document.querySelector('.id')
const nombres = document.querySelector('.nombres')
const apellidos = document.querySelector('.apellidos')
const telefono = document.querySelector('.telefono')
const correo = document.querySelector('.correo')
const direccion = document.querySelector('.direccion')
const ciudad = document.querySelector('.ciudad')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')

const listadoTareas = document.querySelector('.listado-tareas')

const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: id.value,
        nombres: nombres.value,
        apellidos: apellidos.value,
        telefono: telefono.value,
        correo: correo.value,
        direccion: direccion.value,
        ciudad: ciudad.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, listadoTareas)