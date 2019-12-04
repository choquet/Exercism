export class Series {
  constructor(string) {
    this._digits = string.split("").map(v => +v)
  }

  get digits() {
    return this._digits
  }

  slices(number) {
    if (this._digits.length < number) {
      throw new Error('Slice size is too big.')
    } else {
      let digits = this._digits.join("")
      let slices = []
      while (digits.length >= number){
        let slice = digits.match(new RegExp("\\d{" + number + "}"))
        slices.push(slice[0].split("").map(v => +v))
        digits = digits.substr(1)
      }
      return slices
    }
  }
}
