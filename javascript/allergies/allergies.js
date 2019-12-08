const ALLERGENS = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]

export class Allergies {

  constructor(allergyScore) {
    this._allergyScore = allergyScore
  }

  list() {
    return ALLERGENS.filter((_, idx) => !!(Math.pow(2, idx) & this._allergyScore))
  }

  allergicTo(item) {
    return !!(Math.pow(2, ALLERGENS.indexOf(item)) & this._allergyScore)
  }
}
