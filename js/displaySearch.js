import showInfo from "./showInfo.js";
import getLastWords from "./lastWords.js";

const displaySearch = async (value) => {
  const characterDOM = document.querySelector(".characters-container");

  const characters = await getLastWords();

  const search = characters.filter((c) => {
    const str = c.death.toLowerCase();

    if (str.includes(value.toLowerCase())) {
      return c;
    }
  });

  const character = search
    .map((char) => {
      const { death: name } = char;
      const { last_words: lw } = char;
      const { responsible: rd } = char;
      const { cause: cd } = char;

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
            <p>Cause of death: <span>${cd}</span></p>
            <p>Responsable for the death: <span>${rd}</span></p>
          </div>
        </article>
        `;
    })
    .join("");

  characterDOM.innerHTML = character;
  showInfo();
};

export default displaySearch;
