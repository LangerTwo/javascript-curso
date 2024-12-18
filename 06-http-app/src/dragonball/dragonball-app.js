

/**
 * @returns {Object} character DB
 */
const fetchQuote = async() => {
    const res = await fetch('https://dragonball-api.com/api/characters?limit=1');
    const data = await res.json();
    console.log(data.items[0])

    return data.items[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const DragonballApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Dragonball App';
    element.innerHTML = 'Loading...';
    // await fetchQuote();

    const nameChart = document.createElement('h3');
    const descriptionChart = document.createElement('p');

    const renderChart = ( character ) => {
        nameChart.innerHTML = character.name; // Cambia el acceso a las propiedades correctas
        descriptionChart.innerHTML = character.description || 'No description available.'; // Manejo de descripción nula
        element.innerHTML = ''; // Limpia el contenido anterior
        element.appendChild( nameChart );
        element.appendChild( descriptionChart );
    }

    fetchQuote()
        .then( renderChart )
        .catch( error => {
            console.error('Error fetching data:', error);
            element.innerHTML = 'Error loading data.';
        });
}