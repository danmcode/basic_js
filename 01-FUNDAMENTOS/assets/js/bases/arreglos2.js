/**
 * METODOS: Funciones que bienen internas de los arreglos
 * PROPIEDADES: Como una variable que viene dentro del arreglo
 */

let games = [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ];

console.log('length: ', games.length);

let first   = games[0];
let last    = games[ games.length - 1 ];

console.log({ first, last });

//Recorrer arreglos
games.forEach( (value, index, arr) => {
    console.log({value, index, arr});
});

//add a new element at end
let newLength = games.push('F-Zero');
console.log({ newLength, games });

//add a new element at start
let newLength2 = games.unshift('Fire Emblem');
console.log({ newLength2, games });

//delete at element
let deletedGame = games.pop();
console.log({ deletedGame });

//delete a element in a specific position
let positionToDelete = 1;
// A partir de la posicion borre 2
let deletedGames = games.splice(positionToDelete, 2);
console.log({ deletedGames });

//Get the element index in array
let metroidIndex = games.indexOf('Metroid');
console.log(metroidIndex);