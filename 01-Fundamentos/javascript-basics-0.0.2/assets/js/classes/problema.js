

const fher = {
    nombre: 'Alan',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } -- edad: ${ this.edad }`)
    }
}

const fher2 = {
    nombre: 'david',
    edad: 28,
}

// fher.imprimir()
// este era el antigua estandar de la forma en la que se crea un clase orientada a objetos
function Persona(nombre, edad) {
    console.log('esta linea')

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } -- edad ${ edad }`)
    }
}

const maria = new Persona('Maria', 18)
// console.log(maria)
maria.imprimir();