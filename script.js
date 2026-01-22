const characterRoster = [];
const main = document.querySelector("main");

// Character constructor function
function Character({ name, type, health, attack, mana }) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.type = type;
  this.health = health;
  this.attack = attack;
  this.mana = mana;
  this.level = 1; // prep for later
}

// Creates a new character and adds it to the characterRoster array
function addCharacterToRoster(characterData) {
  const character = new Character(characterData);
  characterRoster.push(character);
}

// Loops through characterRoster array and displays each character
function displayCharactersOnPage() {
  main.innerHTML = "";
  characterRoster.forEach((char) => {
    let characterCard = document.createElement("div");
    characterCard.classList.add("character-card");
    characterCard.dataset.id = char.id;
    characterCard.innerHTML = `<div class="character-name">
        <h1>${char.name}</h1>
        <h2 class="${char.type}">${char.type}</h2>
    </div>
    <div class="character-stats">
        <div class="stat-box">
        <h3>HP:</h3>
        <h3 class="character-hp">${char.health}</h3>
        </div>
        <div class="stat-box">
        <h3>ATK:</h3>
        <h3 class="character-attack">${char.attack}</h3>
        </div>
        <div class="stat-box">
        <h3>Mana:</h3>
        <h3 class="character-mana">${char.mana}</h3>
        </div>
    </div>
    <div class="character-level-box">
        <div class="stat-box">
        <h3>Level:</h3>
        <h3 class="character-lvl">100</h3>
        </div>
        <div>
        <button class="lvl-button lvl-up">+</button>
        <button class="lvl-button lvl-down">-</button>
        </div>
    </div>
    <button class="delete-button">DELETE</button>`;
    main.appendChild(characterCard);
  });
}

// Functionality for New Character button
const newCharBtn = document.querySelector(".new-btn");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
newCharBtn.addEventListener("click", () => {
  displayForm();
});

function displayForm() {
  form.reset();
  modal.classList.remove("hidden");
}

// Functionality for Close Menu button
const closeBtn = document.querySelector("#close-form-btn");
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Functionality for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const characterData = {
    name: document.querySelector("#name").value,
    type: document.querySelector("#class").value,
    health: document.querySelector("#health").value,
    attack: document.querySelector("#attack").value,
    mana: document.querySelector("#mana").value,
  };

  addCharacterToRoster(characterData);
  displayCharactersOnPage();

  form.reset();
  modal.classList.add("hidden");
});
