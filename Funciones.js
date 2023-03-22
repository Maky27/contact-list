const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}
const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)
 
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }    
}

const crearContacto = (parentNode, contacto, db) =>{

    let divContacto = document.createElement('div')
    let idContacto = document.createElement('h3')
    let nombresContacto = document.createElement('h3')
    let apellidosContacto = document.createElement('p')
    let telefonoContacto = document.createElement('p')
    let correoContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    idContacto.innerHTML = contacto.id
    nombresContacto.innerHTML = contacto.nombres
    apellidosContacto.innerHTML = contacto.apellidos
    telefonoContacto.innerHTML = contacto.telefono
    correoContacto.innerHTML = contacto.correo
    direccionContacto.innerHTML = contacto.direccion
    ciudadContacto.innerHTML = contacto.ciudad
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(idContacto)
    divContacto.appendChild(nombresContacto)
    divContacto.appendChild(apellidosContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(correoContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)



}