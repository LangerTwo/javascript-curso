import { heroes } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    
    const promise = new Promise( ( resolve, reject ) => {
        
        const hero = heroes.find( hero => hero.id === id )

        if( hero ) {
            resolve( hero );
            return;
        }
        reject(`Hero with id ${ id } not found`);
    });

    return promise;
}