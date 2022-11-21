/**
 * Creación de objetos, se vuelve mucho mas
 * complicado de manejarlos si no se tiene
 * una base o un esqueleto, se debe copiar
 * y pegar mucho codigo
 */

const dan = {
    name: 'Daniel',
    age: 25,
    imprimir(){
        console.log(`Name: ${ this.name } - age: ${ this.age }`)
    }
}

const sof = {
    name: 'Sofia',
    age: 17,
    imprimir(){
        console.log(`Name: ${ this.name } - age: ${ this.age }`)
    }
}

dan.imprimir();

/**
 * De la siguiente forma que se muestra 
 * a continuación se trató de resolver
 * el tema de las clases antes de EMC6
 * 
 * El problema es que si no hay una
 * documentación clara donde se defina
 * que se debe usar la palabra new
 * para instanciar una nueva clase 
 * se puede tomar como una función
 * normalota no como una clase
 */

function Persona(name, age){
    this.name = name;
    this.age = age;

    this.imprimir = function() {
        console.log(`Name: ${ this.name } - age: ${ this.age }`)
    }
}

ingrid = new Persona('Ingrid', 26);
console.log( ingrid );
ingrid.imprimir();

