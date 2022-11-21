class Persona{

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Mensaje de bienvenida a todos');
    }

    nombre='';
    codigo='';
    frase='';
    comida=''

    constructor( nombre = 'Sin Nombre', 
        codigo = 'Sin Codigo', 
        frase = 'Sin frase' ){

        if (! nombre ) throw Error('nombre es necesario')

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy = () => {
        console.log(`Soy ${this.nombre} y mi identidad es: ${ this.frase }`)
    }

    miFrase = () => {
        this.quienSoy();
        console.log(` ${this.nombre} dice: ${ this.frase }`)
    }
}

const spiderman = new Persona(
    'Peter Parker',
    'Spider',
    'Hola, Soy tu amigable amigo el hombre araña'
);

const ironman = new Persona(
    'Tony Stark',
    'Ironman',
    'Yo soy Ironman'
);

// console.log( ironman );

// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

//TODO: No se debe hacer
spiderman.nemessis = 'Duende Verde';

spiderman.miFrase();
console.log( spiderman );
console.log( spiderman.getComidaFavorita )

console.log('Conteo statico: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();