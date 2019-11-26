
export const abilityModifier = ability => {
  if (ability < 3) {
    throw new Error("Ability scores must be at least 3")
  }
  if (ability > 18) {
    throw new Error("Ability scores can be at most 18")
  }
  return Math.floor((ability - 10) / 2)
}

export class Character {

  constructor() {
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
  }

  static rollAbility() {
    var diceRoll = () => Math.floor(Math.random() * 6) + 1
    var dices = [diceRoll(), diceRoll(), diceRoll(), diceRoll()].sort()
    dices.shift()
    return dices.reduce((a, b) => a + b, 0);
  }

  get strength() {
    return this._strength
  }
  set strength(value) {
    this._strength = value
  }

  get dexterity() {
    return this._dexterity
  }
  set dexterity(value) {
    this._dexterity = value
  }

  get constitution() {
    return this._constitution
  }
  set constitution(value) {
    this._constitution = value
  }

  get intelligence() {
    return this._intelligence
  }
  set intelligence(value) {
    this._intelligence = value
  }

  get wisdom() {
    return this._wisdom
  }
  set wisdom(value) {
    this._wisdom = value
  }

  get charisma() {
    return this._charisma
  }
  set charisma(value) {
    this._charisma = value
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution)
  }
  
}
