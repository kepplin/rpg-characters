const characterRoster = [];

function Character({ name, type, health, attack, mana }) {
  ((this.id = crypto.randomUUID()),
    (this.name = name),
    (this.type = type),
    (this.health = health),
    (this.attack = attack),
    (this.mana = mana));
}

function addCharacterToRoster(characterData) {
  const character = new Character(characterData);
  characterRoster.push(character);
}
