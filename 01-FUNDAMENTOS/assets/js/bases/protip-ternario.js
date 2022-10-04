 //Para asignaciones
 const elMayor = (a, b) => (a > b) ? a : b;

 const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

 console.log( elMayor(20,15) );
 console.log( tieneMembresia(true) );

 //Condición implicita dentro de los arreglos
 const amigo = true;
 const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')()
    elMayor(20,15)
 ]

 console.log(amigosArr);

 const nota = 5;

 const grado = nota >= 95 ? 'A+' :
               nota >= 90 ? 'A'  :
               nota >= 85 ? 'B+' :
               nota >= 80 ? 'B'  :
               nota >= 75 ? 'C+' :
               nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado })