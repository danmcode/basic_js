let personage = {
    personageName: 'Tony Stark',
    codeName: 'IronMan',
    alive: false,
    age: 40,
    coors: {
        lat: 34.034,
        lng: -118.0
    },
    suites: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
    direction: {
        zip: '10880, 90265',
        ubication: 'Malibu, California'
    }
}

console.log(personage);
console.log('personage:', personage.personageName);
console.log('name:', personage['personageName']);

console.log('age:', personage.age);

console.log('coors:', personage.coors);
console.log('lat:', personage.coors.lat);

console.log('suits number:', personage.suites.length);
console.log('last suit:', personage.suites[personage.suites.length - 1]);

const x = 'alive';
console.log('is alive?:', personage[x]);

//More Details
// delete a property
delete personage.age;
console.log(personage);

//create a new property
personage.married = true;

//convert object in array
const entriesPairs = Object.entries( personage );
console.log({entriesPairs});


//No permitir que el objeto mute es decir que se le cambien o asignen
//nuevas propiedades
Object.freeze( personage );
personage.money = 100000000000000000000000;
personage.married = false;
personage.direction.ubication = 'Colombia'; //Si se puede hacer objeto dentro de un objeto
console.log( personage );

//get object properties
const objectPropeties = Object.getOwnPropertyNames( personage );
const objectValues = Object.values(personage);
console.log({objectPropeties, objectValues});