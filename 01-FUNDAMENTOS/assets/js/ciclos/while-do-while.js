const carros = ['Ford', 'Mazda', 'Honda',  'Toyota'];
let i = 0;

while (carros[i]) {
    if ( i === 1) {
        i++;
        continue;
    }

    console.log( carros[i] );
    i++;
}

console.warn('Do while');

let j = 0;

do{
    console.log(carros[j]);
    j++
}while (carros[j]);