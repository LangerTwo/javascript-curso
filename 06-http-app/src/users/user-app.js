import { renderAddButtons } from "./presentation/render-add-buttons/render-add-buttons";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saverUser } from "./use-cases/save-user";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable( element );
    renderButtons( element );
    renderAddButtons( element );
    renderModal( element, async ( userLike ) => {
        const user = await saverUser( userLike );
        usersStore.onUserChanged( user );
        renderTable( element );
    });

    // console.log( usersStore.getUser() );
}