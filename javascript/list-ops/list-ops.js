export class List {

  constructor(values = []) {
    this.datas = values
  }

  get values() {
    return this.datas
  }

  append(list) {
    list.values.forEach(el => {
      this.datas.push(el)
    })
    return this
  }

  concat(lists) {
    lists.values.forEach(list => {
      this.append(list)
    })
    return this
  }

  filter(predicate) {
    let filteredList = new List()
    this.values.forEach(el => {
      if(predicate(el)) filteredList.values.push(el)
    })
    return filteredList
  }

  map(fct) {
    let mappedList = new List()
    this.values.forEach(el => {
      mappedList.values.push(fct(el))
    })
    return mappedList
  }

  length() {
    return this.values.length
  }

  foldl(reducer, accumulator) {
    if(this.length()) {
      let element = this.values.shift()
      return this.foldl(reducer, reducer(accumulator, element))
    } else {
      return accumulator
    }
  }

  foldr(reducer, accumulator) {
    if (this.length()) {
      let element = this.values.pop()
      return this.foldr(reducer, reducer(accumulator, element))
    } else {
      return accumulator
    }
  }

  reverse() {
    let reversedList = new List()
    this.values.forEach(el => {
      reversedList.values.unshift(el)
    })
    return reversedList
  }
}
