import { data } from "../data/emoji.js";

const input = document.querySelector(".header__input");
const cardsWrapper = document.querySelector(".cards");

input.addEventListener("input", (evt) => {
    const inputValue = evt.target.value.toLowerCase().trim();

    const filteredData = data.filter(
        (emojiObject) =>
            emojiObject.title.toLowerCase().trim().includes(inputValue) ||
            emojiObject.keywords.toLowerCase().trim().includes(inputValue)
    );

    renderCards(filteredData)
})

function createCard(obj) {
    const card = document.createElement("div");
    card.className = "cards__item";
    card.innerHTML = `<p class="cards__item_icon">${obj.symbol}</p>
                      <p class="cards__item_title">${obj.title}</p>
                      <p class="cards__item_descr">${obj.keywords}</p>`;
    return card;
}

function renderCards(dataArray) {
    cardsWrapper.innerHTML = ''
    dataArray.forEach((emojiObject) => {
        const card = createCard(emojiObject)
        cardsWrapper.appendChild(card);
    });
}

renderCards(data)
