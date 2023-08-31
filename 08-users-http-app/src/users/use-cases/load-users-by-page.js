/**
 * 
 * @param {Number} page 
 * @return
 */
export const loadUsersByPage = async ( page = 1) => {
    const url = `http://localhost:3001/users`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
};