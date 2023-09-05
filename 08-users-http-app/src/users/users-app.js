import { renderButtons } from './presentation/render-buttons/render-button';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store'

/**
 * 
 * @param {HTMLElement} element 
 */
export const UsersApp = async (element) => {
    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
    element.innerHTML = "";

    renderTable(element);
    renderButtons(element);
    // console.log( usersStore.getUsers() );
}