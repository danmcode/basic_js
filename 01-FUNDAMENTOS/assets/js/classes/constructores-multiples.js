class Persona{

    nombre      = '';
    apellido    = '';
    pais        = '';

    //Deficinion de segundo constructor
    static porObj( {nombre, apellido, pais} ){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       =pais;
    }

    getInfo(){
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}

persona1 = new Persona('Daniel', 'Muelas', 'Colombia');
persona1.getInfo();

personaObj = {
    nombre : 'Melissa',
    apellido: 'Martinez',
    pais: 'Colombia'
}

persona2 = Persona.porObj( personaObj );
persona2.getInfo();