
function createPerson(name, lastName) {
    return {
        /**
         * EM6 Si la variable se llama igual que el parametro
         * no hay necesidad de escribirlo dos veces
         */
        name,
        lastName
    }
}

const person = createPerson('Daniel', 'Muelas');
console.log(person);

//Misma función escrita en funcion de flecha.
const person2 = (name, lastName) => ({ name, lastName });
console.log(person2("Daniel", "Muellinu"));

/**
 * Con la palabras arguments puedo tener 
 * todos los argumentos que se pasan 
 * a la funcion
 */
function pritnArguments() {
    console.log(arguments);
}

pritnArguments(10, true, false, "Fernando", "Hello");

/**
 * CON FUNCIONES DE FLECHA
 * en las funciones de flecha se puede poner args
 * 
 * 1. Despues del parametro rest no puede ir nada mas
 * ... Une todos los parametros de una variable y
 * transformalo como un arreglo
 * 2. Si se desea tener un parametro se debe especificar antes de ...args
 */
const pritnArguments2 = ( edad, ...args ) => args;

/**
 * 
 */
const [casado, vivo, nombre, saludo] = pritnArguments2(
    10, 
    true, 
    false, 
    "Daniel", 
    "Hello2"
);

console.log({ casado, vivo, nombre, saludo });
const {name, lastName} = person2("Daniel", "Muellinu");
console.log({name, lastName});

/**
 * Desestructuración de argumentos
 */
 const tony = {
    personageName: 'Tony Stark',
    codeName: 'IronMan',
    alive: false,
    age: 40,
    suites: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
}

const imprimePropiedades = ({
    personageName,
    codeName,
    alive,
    age = 0,
    suites
}) => {
    console.log({personageName});
    console.log({codeName});
    console.log({alive});
    console.log({age});
    console.log({suites});
}

imprimePropiedades( tony );
