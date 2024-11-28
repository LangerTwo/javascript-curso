
// Esta es un sintaxis mas limpia para las Clases
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

console.log( spiderman )
console.log( ironman )