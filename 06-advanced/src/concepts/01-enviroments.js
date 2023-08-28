/**
 * 
 * @param {HTMLDivElement} element
 */

export const enviromentComponent = (element) => {

    const html = `

        Dev: ${ import.meta.env.DEV } <br>
        Prod: ${ import.meta.env.PROD } <br>
        Key: ${ import.meta.env.VITE_API_KEY } <br>
        Base URL: ${ import.meta.env.VITE_BASE_URL } <br>

    `;

    element.innerHTML = html;

}