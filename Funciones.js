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
    let nombresContacto = document.createElement('h3')
    let numeroContacto = document.createElement('h3')
    let correoContacto = document.createElement('h3')
    let iconoBorrar = document.createElement('span')

    nombresContacto.innerHTML = contacto.nombres
    numeroContacto.innerHTML = contacto.numero
    correoContacto.innerHTML = contacto.correo
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombresContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(correoContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)



}