/**
 * FUNCION: Centralizar la logica de un código quese va ha 
 * utilizar varias veces
 * 
 * Funcion vs Metodo
 */

function greeting(){
    console.log("Hello World");
}

//Funciones anonimas
const greeting2 = function(userName){
    console.log(`Hello ${userName}`);
    return 1;
};

//Argumentos
function greeting3(userName){
    console.log( `Hello ${userName}` );
}

//Lambda functions
const greeting4 = (userName) => {
    console.log( `Hello ${userName}` );
}

greeting();
greeting2("Alexander");
greeting3("Daniel");
greeting4("Daniel Alexander");

/**
 * Todas las funciones cuando no retornan
 * explicitamente return retorna undefined.
 */
const greetingReturn = greeting2("Alexander");
console.log({greetingReturn});

function sum(a,b) {
    return a + b
}

console.log(sum(1,2));

const sum2 = (a,b) => {
    return a + b;
};

console.log(sum2(2, 8));

const sum3 = (a,b) => a + b;
console.log( sum3(2,34) );


function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio())

const getAleatorio2 = ()=> Math.random();
console.log(getAleatorio2())
