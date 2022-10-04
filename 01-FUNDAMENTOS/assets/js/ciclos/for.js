const heroes = [ 
    'Batman',
    'Superman',
    'Mujer Maravilla',
    'Aquaman'
 ]

 console.warn('For tradicional');
 for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element)
 }

 console.warn('For in');
 for (const i in heroes) { 
        const element = heroes[i];
        console.log(element);    
 }

 console.warn('For of');
 for (const hereoe of heroes) {
    console.log( hereoe )
 }



