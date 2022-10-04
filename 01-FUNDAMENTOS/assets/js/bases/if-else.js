a = 10

if (a >= 10) { //undefined, null, una asignacion
   console.log( 'A es mayor o igual que 10' ) 
} else {
    console.log( 'A es menor que 10' ) 
}

const hoy = new Date();
console.log( hoy );

let dia = hoy.getDay();
console.log(( dia ))

if ( dia === 0 ) {
    console.log("domingo")
} else if ( dia === 1 ){
    console.log("Lunes")
}else if ( dia === 2 ){
    console.log("martes")
}
else {
    console.log("no es domingo ni lunes ni martes") 
}

//Dias de la semana
const diasDeLaSemana = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado",
};

console.log(diasDeLaSemana[dia] || 'Día no definido')