import displayCharacters from "./displayCharacters.js";

const showInfo = () => {

  const characters = document.querySelectorAll(".character");

  characters.forEach((char) => {
    const btn = char.querySelector(".btn");

    btn.addEventListener("click", () => {
      characters.forEach((c) => {
        if (c !== char) {
          c.classList.remove("show-info");
        }
      });
      char.classList.toggle("show-info");
    });
  });
};

export default showInfo;
