
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

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi nombre es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`)
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log( spiderman )
// console.log( ironman )

// spiderman.quienSoy();
spiderman.miFrase();

// ironman.quienSoy();
// ironman.miFrase();