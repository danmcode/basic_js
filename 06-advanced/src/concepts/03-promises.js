import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element
 */
export const PromiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
        <h3> ${hero1.name} </h3>
        <h3> ${hero2.name} </h3>
        `
    };

    const renderError = (error) => {
        element.innerHTML = `
        <h3> ${error} </h3>
        `;
    };

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f9f80b591f499df32';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeros( hero1, hero2 ) )
    .catch( renderError );

    //! Forma 3
    // let hero1;

    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero( id2 );
    //     }).then (hero2 => {
    //         renderTwoHeros( hero1, hero2 );
    //     })
    //     .catch(renderError);
    
    //! Forma 1
    // findHero( id1 )
    //     .then( renderHero )
    //     .catch( renderError );

    //! Forma 2
    // findHero( id1 )
    //     .then( (hero1) => {

    //         findHero( id2 )
    //             .then(hero2 => {
    //                 renderTwoHeros(hero1, hero2);
    //             })
    //             .catch( renderError );

    //     })
    // .catch( renderError );


}

/**
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {

        const heroe = heroes.find(hero => hero.id === id);

        if (heroe) {
            resolve(heroe);
        }

        reject(`Hero with id: ${id} not found`);

    });

}