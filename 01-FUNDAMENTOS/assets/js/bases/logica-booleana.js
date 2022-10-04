const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
}

console.warn('Not o la negación');
console.log( true );  //true
console.log( !true ); //false
console.log( !false ); //true

console.log( !regresaFalse() ); //true

console.warn('AND');
console.log(true && true); //true
console.log(true && !false); //true

console.log('===========');
console.log( regresaFalse() && regresaTrue() ); //false
console.log( regresaTrue() && regresaFalse() ); //false

regresaTrue() && regresaFalse();
console.log('===========');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false); //false

console.warn('OR');
console.log(true || false); //true
console.log(false || false); //false

console.log(regresaTrue() || regresaFalse())
console.log('4 condiciones', true || true || true || false); //true


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo';

const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso';
const a5 = soyFalse || soyNull || regresaTrue() || 'Ya no soy falso';

console.log({ a1, a2, a3, a4, a5 });