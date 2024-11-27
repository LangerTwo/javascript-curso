const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('Not o la negacion');
console.log( true ) // True
console.log( !true ) // False
console.log( !false ) // True
console.log( !regresaFalse() ) // True

console.warn('And'); // true si todos son verdaderos
console.log(true && true) // true
console.log(true && false) // false

console.log('=========')
console.log( regresaFalse() && regresaTrue()) // false 
console.log( regresaTrue() && regresaFalse() ) // false


console.log('==== && ====')
regresaFalse() && regresaTrue()
console.log( '4 condiciones', true && true && true && false) // false

console.log('OR') // true
console.log(true || true) // true
console.log(false || false) // false

console.log( regresaTrue() || regresaFalse()) // true
console.log( '4 condiciones', true || true || true || false) // true

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({ a1, a2, a3, a4, a5 })


if (regresaFalse() && regresaTrue (true || false || true)) {
    console.log('Hacer algo')
} else {
    console.log('Hacer otra cosa')
}