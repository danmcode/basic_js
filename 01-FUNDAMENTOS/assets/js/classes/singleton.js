/**
 * La idea del singlenton es tener una
 * sola instancia de la clase, que no
 * importa si se escribe la palabra new
 * un monton de veces, siempre regrese
 * la misma instancia de la clase.
 * 
 * Es util cuando se quiere compartir
 * información a lo largo de la aplicación
 * Es util con bases de datos
 */

class Singleton{
    static instancia;
    nombre = '';
    
    constructor( nombre = '' ){

        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
        // return this;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('SpiderMan');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre de la instancia 1 es: ${ instancia1.nombre }`)
console.log(`Nombre de la instancia 2 es: ${ instancia2.nombre }`)
console.log(`Nombre de la instancia 3 es: ${ instancia3.nombre }`)