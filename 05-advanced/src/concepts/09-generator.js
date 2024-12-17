
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFuntionsComponent = ( element ) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next() )
    const genId = idGenerator();
    // console.log( genId.next() )
    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`
    }

    button.addEventListener('click', renderButton)
}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {

    yield 'Primer Campo';
    yield 'Segundo Campo';
    yield 'Tercer Campo';
    yield 'Cuarto Campo';

    return 'Ya no hay valores'
    yield 'Ya no puede hacer nada';
}