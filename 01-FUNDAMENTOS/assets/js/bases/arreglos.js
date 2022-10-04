/**
 * Los arreglos objeto parecidos a una lista de informacion,
 * que contienen un grupo de elementos
 * Usualmente, esa informacion dentro
 * de un arreglo es de un mismo tipo
 * de dato
 */

//Formas para crear un arreglo

//1. Forma muy poco común
const arr = new Array(10);
console.log(arr);

//2. Forma más común
const arr1 = [];
console.log(arr1);

let videoGames = ['Mario 3', 'Megaman', 'Chrono Triger'];
console.log({ videoGames });

//Imprimir la primera posición
console.log( videoGames[0] );

/**
 * En JS los arreglos pueden almacenar elementos
 * de diferentes tipos por ejemplo:
 */

let thingsArr = [
    true,
    123,
    "Daniel",
    1 + 2,
    function () {},
    () => {},
    { a:1 , b:2 },
    //Arrays in arrays
    ['X', 'MegaMan', 'Zero', 'Dr Light', [
        'Dr. Willy',
        'Woodman'
    ],
    ],
];

console.log({thingsArr});

//Imprimir solo el Dr Light
console.log(thingsArr[7][3]);


