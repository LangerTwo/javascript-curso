
// Esta es un sintaxis mas limpia para las Clases
class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' Instancias';
    }

    static mensaje() {
        console.log( this.nombre ); //undefined
        console.log('Hola a todos, soy un método stático')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidadFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
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
// const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');


// spiderman.quienSoy();
// console.log( spiderman )
spiderman.miFrase();
spiderman.setComidadFavorita = 'El pie de cereza de la tía May';
// console.log( spiderman.getComidaFavorita )

// console.log( ironman )
// ironman.quienSoy();
// ironman.miFrase();

// Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo)
console.log( Persona.conteo )
Persona.mensaje()