

/**
 * 
 * @param {String|Number} id 
 */
export const delteUserById = async ( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url, {
        method: 'DELETE',
    });

    const delteResult = await res.json();
    console.log({ delteResult });
    
    return true;
}