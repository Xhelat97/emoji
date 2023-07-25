import { data } from "../data/emoji.js";

const input = document.querySelector(".header__input");
const cardsWrapper = document.querySelector(".cards");

const uniqueData = getUniqueData();

function getUniqueData() {
    return data.map((emojiObject) => {
        const uniqueKeywords = [
            ...new Set(emojiObject.keywords.split(" ")),
        ].join(" ");
        return { ...emojiObject, keywords: uniqueKeywords };
    });
}

input.addEventListener("input", (evt) => {
    const inputValue = evt.target.value.toLowerCase().trim();

    const filteredData = uniqueData.filter((emojiObject) => {
        const lowerTitle = emojiObject.title.toLowerCase().trim();
        const lowerKeywords = emojiObject.keywords.toLowerCase().trim();
        return (
            lowerTitle.includes(inputValue) ||
            lowerKeywords.includes(inputValue)
        );
    });

    renderCards(filteredData);
});

function createCard({ symbol, title, keywords }) {
    const card = document.createElement("div");
    card.className = "cards__item";
    card.innerHTML = `<p class="cards__item_icon">${symbol}</p>
                      <p class="cards__item_title">${title}</p>
                      <p class="cards__item_descr">${keywords}</p>`;
    return card;
}

function renderCards(dataArray) {
    cardsWrapper.innerHTML = "";
    dataArray.forEach((emojiObject) => {
        const card = createCard(emojiObject);
        cardsWrapper.appendChild(card);
    });
}

renderCards(uniqueData);