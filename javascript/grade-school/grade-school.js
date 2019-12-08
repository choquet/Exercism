export class GradeSchool {

  constructor() {
    this._rooster = {}
  }

  roster() {
    return deepCopy(this._rooster)
  }

  add(name, grade) {
    if(!this._rooster[grade]) this._rooster[grade] = []
    this._rooster[grade].push(name)
    this._rooster[grade].sort()
  }

  grade(grade) {
    if (!this._rooster[grade]) this._rooster[grade] = []
    return [...this._rooster[grade]]
  }
}

const deepCopy = inObject => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = (typeof value === "object" && value !== null) ? deepCopy(value) : value
  }

  return outObject
}