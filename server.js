class Usuario {
    constructor(nombres, apellidos, libros, mascotas) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.libros = [];
        this.mascotas = [];
    }
}

function getFullName(usuario){
    return console.log(usuario.nombres + " " + usuario.apellidos);
}

function addMascota(usuario, nombreMascota){
    usuario.mascotas.push(nombreMascota)
    return console.log(usuario.mascotas)
}

function countMascotas(usuario){
    return console.log(usuario.mascotas.length) 
    
}

function addBook(usuario, nombre, autor){
    usuario.libros.push({nombre: nombre, autor: autor})
    return console.log(usuario.libros)
}

function getBookNames(usuario){
    let nombresDeLibros = usuario.libros.map(libro => libro.nombre)
    return console.log(nombresDeLibros)
}

let usuarioRandom = new Usuario ("mariano", "jimenez", [], [])

getFullName(usuarioRandom)
addMascota(usuarioRandom, "firulais")
countMascotas(usuarioRandom)
addBook(usuarioRandom, "El libro negro de la nueva izquierda", "Agustín Laje")
getBookNames(usuarioRandom)

