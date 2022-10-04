/**
 * Todos los tipos de datos primitivos se pasan por valor
 * es decir, no importa si transformamos la variable
 * o la asignamos a otra cosa, no se esta afectando
 * el mismo lugar en memoria, se esta pasando
 * unicamente el valor.
 */
let a = 10;
let b = a;

a = 30
console.log({a,b}) //a = 30 , b = 10

/**
 * En Js todos los objetos son pasados por referencia.
 * Problema = Todo queda almacenado en un espacio de 
 * memoria. Por eso cuando se reemplaza una propiedad
 * este reemplazo se realiza en todas las propiedades
 * del objeto.
 */
let juan = { nombre: 'juan' };
let ana = juan;

ana.nombre = 'Ana';

console.log({ juan, ana }) // ana:{nombre:'Ana'} ana:{juan:'Ana'}

//MISMO ERROR PERO POR FUNCIÓN
const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

/**
 * Se envia el objeto peter a la función
 * y peter esta pasando por referencia a la función
 * cambiaNombre()
 * 
 * Entonces cualquier modificación que se le realice
 * a ese objeto va a ser afectado si se retorna.
 * 
 * es decir el peter que se esta enviando, es 
 * el mismo peter que se modifica y es el mismo
 * peter que se esta retornando.
 * 
 * Entonces finalmente es el mismo objeto en
 * las dos variables.
 * 
 */
let peter = { nombre: 'peter' }
let tony  = cambiaNombre( peter );

// peter: { nombre: 'Tony' }
// tony: { nombre: 'Tony' }
console.log({ peter, tony });

//COMO SE RESUELVE

/**
 * Cuando se quiere crear una copia de un obj
 * se pone el objeto entre llaves { ...obj }
 * operador spread ... (En otro lugar es spread):
 *  - Simnboliza separa los elementos.
 *  - Ventaja rompe la referencia y apunta a diferentes
 *    espacios en memoria.
 *
 * no confundir con rest ... (Cuando pasa como argumento en una función)
 *  - Une todos los argumentos en una sola variable y
 *    transformalo en un arreglo
 */
let pedro = { nombre: 'pedro' };
let maria = { ...pedro};

maria.nombre = 'maria';

console.log({ pedro, maria }) // ana:{nombre:'Ana'} ana:{juan:'Ana'}

//SOLUCIÓN PERO POR FUNCIÓN
const cambiaNombreSolved = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let parker = { nombre: 'peter' }
let stark  = cambiaNombre( peter );

// peter: { nombre: 'Tony' }
// tony: { nombre: 'Tony' }
console.log({ parker, stark });

//AHORA PROBLEMA CON ARREGLOS.
const frutas = [ 'Manzana', 'Pera', 'Piña' ];


console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas})
