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

class Heroe extends Persona{

    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
    }

    // Sobrescritura de los metodos
    quienSoy(){
        console.log(`Soy ${ this.nombre }, ${ this.clan }  `);
        super.quienSoy();
    }

}

const spiderman = new Heroe(
    'Peter Parker',
    'Spider',
    'Hola, Soy tu amigable amigo el hombre araña'
);

// const spiderman = new Heroe();
console.log(spiderman);