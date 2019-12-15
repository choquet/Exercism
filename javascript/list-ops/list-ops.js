export class List {

  constructor(values = []) {
    this.datas = values
  }

  get values() {
    return this.datas
  }

  shift() {
    let [first, ...others] = this.datas
    this.datas = others
    return first
  }

  unshift(el) {
    this.datas = [el, ...this.datas]
  }

  push(el) {
    this.datas = [...this.datas, el]
  }

  pop() {
    this.datas = this.reverse().values
    let [last, ...others] = this.datas
    this.datas = others
    this.datas = this.reverse().values
    return last
  }

  append(list) {
    for(const el of list.values) {
      this.push(el)
    }
    return this
  }

  concat(lists) {
    for (const list of lists.values) {
      this.append(list)
    }
    return this
  }

  filter(predicate) {
    let filteredList = new List()
    for (const el of this.values) {
      if (predicate(el)) filteredList.push(el)
    }
    return filteredList
  }

  map(fct) {
    let mappedList = new List()
    for (const el of this.values) {
      mappedList.push(fct(el))
    }
    return mappedList
  }

  length() {
    let length = 0
    while (this.datas[length] != undefined) {
      length++
    }
    return length
  }

  foldl(reducer, accumulator) {
    if(this.length()) {
      let element = this.shift()
      return this.foldl(reducer, reducer(accumulator, element))
    } else {
      return accumulator
    }
  }

  foldr(reducer, accumulator) {
    if (this.length()) {
      let element = this.pop()
      return this.foldr(reducer, reducer(accumulator, element))
    } else {
      return accumulator
    }
  }

  reverse() {
    let reversedList = new List()
    for(const el of this.values) {
      reversedList.unshift(el)
    }
    return reversedList
  }
}
