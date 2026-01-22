const characterRoster = [];

function Character(id, name, type, health, attack, mana) {
  ((this.id = id),
    (this.name = name),
    (this.type = type),
    (this.health = health),
    (this.attack = attack),
    (this.mana = mana));
}
