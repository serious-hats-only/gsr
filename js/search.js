const baseURL = 'https://www.giphy.com/search/';

async function genRandomGif(modifier) {
    let response = await fetch('https://random-word-api.vercel.app/api?words=1')
    let randomWord = await response.text()

    // Removes quotes and brackets from the raw JSON response
    const cleanedString = randomWord.replace(/\[\s*"/, '');
    const finalString = cleanedString.replace(/"\s*]$/, '');

    const url = baseURL + modifier + "-" + finalString;
  
    open(url);
}