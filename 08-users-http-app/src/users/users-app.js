import usersStore from './store/users-store'

/**
 * 
 * @param {HTMLElement} element 
 */
export const UsersApp = async (element) => {
    element.innerHTML = "Loading...";
    await usersStore.loadNextPage();
}