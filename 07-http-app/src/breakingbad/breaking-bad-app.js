/**
 * @returns {Promise<object>} quote information
 */
const fetchQuote = async () => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    console.log(data[0]);
    return data[0];

}


/**
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = (element) => {

    document.querySelector('#app-title').innerHTML = 'BreakingBad App';
    element.innerHTML = 'Loading...';
    // fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const quoteAuthor = document.createElement('h3');
    const nextBtn = document.createElement('Button');
    nextBtn.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        quoteAuthor.innerHTML = data.author;

        element.replaceChildren( quoteLabel, quoteAuthor, nextBtn );
    }

    fetchQuote()
        .then( renderQuote );
    
    nextBtn.addEventListener('click',() => {
        element.innerHTML = 'Loading...';
        fetchQuote()
            .then( renderQuote );
    });
    

}