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
