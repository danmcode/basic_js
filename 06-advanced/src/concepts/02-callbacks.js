/**
 * 
 * @param {HTMLDivElement} element
 */

import { heroes } from "../data/heroes";

/**
 * Función que recibe como parametro otra función 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371f2343e37870b91ef1';
    const id1 = '5d86371f25a058e5b1c8a65e';

    findHero( id, (error, heroe1) => {
        // element.innerHTML = heroe?.name || 'No hay heroe';

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero(id1, (error, heroe2)=>{
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${heroe1.name} / ${heroe2.name} `;
        });
    });

}

/**
 * 
 * @param {String} id 
 * @param {( error: String|Null, hero: object) => void } callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero ){
        callback(`Hero with id ${id} not found`);
        return;
    }
    
    callback( null, hero );
}