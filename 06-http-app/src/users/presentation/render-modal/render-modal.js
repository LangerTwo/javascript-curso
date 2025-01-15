import './render-modal.css';
import modalHtml from './render-modal.html?raw';

let modal, form;

// TODO: cargar usario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');

    // TODO: Reset del formulario
}

/**
 * @param {HTMLDivElement} element
*/
export const renderModal = ( element ) => {

    if( modal ) return;
    
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');
    form.addEventListener('submit', ( event ) => {
        event.preventDefault();

        const formData = new FormData( form );
        for (const iterador of formData) {
            console.log(iterador);
        }
    });

    modal.addEventListener('click', ( event ) => {
        if( event.target === modal ) {
            hideModal();
        }
    });

    element.append( modal );
}