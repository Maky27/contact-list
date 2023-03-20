const nombres = document.querySelector('.nombres')
const numero = document.querySelector('.numero')
const correo = document.querySelector('.correo')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')

const listadoTareas = document.querySelector('.listado-tareas')

const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombres: nombres.value,
        numero: numero.value,
        correo: correo.value,
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, listadoTareas)