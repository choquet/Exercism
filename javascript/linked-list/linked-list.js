export class LinkedList {

  constructor() {
    this._list = []
  }

  push(node) {
    this._list.push(node)
  }

  pop() {
    return this._list.pop()
  }

  shift() {
    return this._list.shift()
  }

  unshift(node) {
    this._list.unshift(node)
  }

  delete(node) {
    const index = this._list.indexOf(node)

    if(index != -1) {
      this._list.splice(index, 1)
    }
  }

  count() {
    return this._list.length
  }
}
