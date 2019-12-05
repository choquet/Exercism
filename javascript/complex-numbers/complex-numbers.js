export class ComplexNumber {
  constructor(a, b) {
    this._a = a
    this._b = b
  }

  get real() {
    return this._a
  }

  get imag() {
    return this._b
  }

  // (a + i * b) + (c + i * d) = (a + c) + (b + d) * i
  add(complexNumber) {
    const a = this._a
    const b = this._b
    const c = complexNumber.real
    const d = complexNumber.imag

    this._a = (a + c)
    this._b = (b + d)
    return this
  }

  // (a + i * b) - (c + i * d) = (a - c) + (b - d) * i
  sub(complexNumber) {
    const a = this._a
    const b = this._b
    const c = complexNumber.real
    const d = complexNumber.imag

    this._a = (a - c)
    this._b = (b - d)
    return this
  }

  // (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i
  div(complexNumber) {
    const a = this._a
    const b = this._b
    const c = complexNumber.real
    const d = complexNumber.imag
    
    this._a = (a * c + b * d) / (c**2 + d**2)
    this._b = (b * c - a * d) / (c**2 + d**2)
    return this
  }

  // (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i
  mul(complexNumber) {
    const a = this._a
    const b = this._b
    const c = complexNumber.real
    const d = complexNumber.imag

    this._a = (a * c - b * d)
    this._b = (b * c + a * d)

    return this
  }

  // The absolute value of a complex number z = a + b * i is a real number | z | = sqrt(a ^ 2 + b ^ 2)
  get abs() {
    return Math.sqrt(this._a**2 + this._b**2)
  }

  // The conjugate of the number a + b * i is the number a - b * i
  get conj() {
    if (this._b == 0) return this
    return new ComplexNumber(this._a, -this._b)
  }

  // Raising e to a complex exponent can be expressed as e^(a + i * b) = e^a * e^(i * b), the last term of which is given by Euler's formula e^(i * b) = cos(b) + i * sin(b)
  get exp() {
    const a = this._a
    const b = this._b

    this._a = Math.pow(Math.E, a) * Math.cos(b)
    this._b = Math.pow(Math.E, a) * Math.sin(b)

    return this
  }
}
