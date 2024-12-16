import { heroes } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    console.log('Inicion de componente')

    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error)

    console.log('Fin de componente')
    
}


/**
 * 
 * @param {String} hero 
 * @returns {Promise<String>}
 */
const findHero = async( id ) => {
    const hero = heroes.find( hero => hero.id === id );
    if(!hero)
        throw `Hero with id ${ id } not found`;
    
    return hero.name;
}