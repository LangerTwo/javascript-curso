import { showModal } from '../render-modal/render-modal';
import './render-add-buttons.css';


export const renderAddButtons = ( element ) => { 

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    //TODO: Add event listener to the button
    fabButton.addEventListener('click', () => {
        // throw new Error('Not implemented');
        showModal();
    });

}