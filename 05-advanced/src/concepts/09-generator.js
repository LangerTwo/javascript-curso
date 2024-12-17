
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFuntionsComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();

    console.log( myGenerator.next() )
    console.log( myGenerator.next() )
    console.log( myGenerator.next() )
    console.log( myGenerator.next() )
    console.log( myGenerator.next() )
}

function* myFirstGeneratorFunction() {

    yield 'Primer Campo';
    yield 'Segundo Campo';
    yield 'Tercer Campo';
    yield 'Cuarto Campo';

    return 'Ya no hay valores'
    yield 'Ya no puede hacer nada';
}