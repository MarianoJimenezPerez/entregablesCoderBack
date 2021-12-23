class Usuario {
    constructor(nombres, apellidos, libros, mascotas) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        return console.log(this.nombres + " " + this.apellidos);
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
        return console.log(this.mascotas)
    }
    countMascotas(){
        return console.log(this.mascotas.length) 
        
    }
    addBook( nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
        return console.log(this.libros)
    }
    getBookNames(){
        let nombresDeLibros = this.libros.map(libro => libro.nombre)
        return console.log(nombresDeLibros)
    }
}

let usuarioRandom = new Usuario ("mariano", "jimenez", [], [])

usuarioRandom.getFullName()
usuarioRandom.addMascota("firulais")
usuarioRandom.countMascotas()
usuarioRandom.addBook("El libro negro de la nueva izquierda", "Agustín Laje")
usuarioRandom.getBookNames()
