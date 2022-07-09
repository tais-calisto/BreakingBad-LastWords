import getLastWords from "./lastWords.js";
import showInfo from "./showInfo.js"


const displayCharacters = async() =>{
    const characterDOM = document.querySelector('.characters-container');

    const characters = await getLastWords();
    
    const character = characters.map((char) => {
        const {death: name} = char;
        const {last_words : lw} = char;
        const {responsible: rd} = char;

        return `
        <article class="character">
          <div class="char-name">
            <p>${name}</p>    
            <button type="button" class="btn">
              <span class="plus-icon">
                <i class="far fa-plus-square"></i>
              </span>
              <span class="minus-icon">
                <i class="far fa-minus-square"></i>
              </span>
            </button>
          </div>
          <div class="char-info">
            <p>Last Words: <span>${lw}</span></p>
            <p>Responsable for the death: <span>${rd}</span></p>
          </div>
        </article>
        `
    }).join('');

    characterDOM.innerHTML = character;
    showInfo();
}


export default displayCharacters;