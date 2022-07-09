import fetchData from "./fetchData.js";

const allDeathsURL = 'https://www.breakingbadapi.com/api/deaths';

const getLastWords = async() => {
    const data = await fetchData(allDeathsURL);
    const lastWords = data.filter((lw)=>{
        if(lw.last_words !== "Unknown"){
            return lw
        }
    });
    return lastWords;
}

export default getLastWords;