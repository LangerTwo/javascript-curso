let a = 5;
if (a >= 10) { // undefiend, null, una asignacion
    console.log('A es mayor o igual que 10')
} else {
    console.log( 'A es mayor que 10')
}

const hoy = new Date() // {}
let dia = hoy.getDay() // 0: Domingo. 1: Lunes, 2: Martes
console.log({ dia })
if( dia === 0 ) {
    console.log('Domingo')
} else if(dia === 1){
    console.log('Lunes')
    // if (dia === 1) {
    //     console.log('Lunes')
    // } else{
    //     console.log('No es Domingo ni Lunes')
    // }
} else if(dia === 2) {
    console.log('Martes')
} else {
    console.log('No es lunes, martes o domingo')
}

// Sin usar If Else, Switch, unicamente objetos
dia = 3;
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
} 
console.log( diasLetras[dia] || 'Diá no definido')

dia = 5;
const diasLetras2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
console.log( diasLetras2[dia] )