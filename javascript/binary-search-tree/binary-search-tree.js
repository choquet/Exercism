class Node {
  
  constructor(value, left=null, right=null) {
    this._value = value
    this._left = left
    this._right = right
  }

  get data() {
    return this._value
  }

  get left() {
    return this._left
  }
  set left(node) {
    this._left = node
  }

  get right() {
    return this._right
  }
  set right(node) {
    this._right = node
  }

}

export class BinarySearchTree {

  constructor(value) {
    this._root = new Node(value)
  }

  get root() {
    return this._root
  }

  get data() {
    return this._root.data
  }

  get right() {
    return this._root.right
  }

  get left() {
    return this._root.left
  }

  insert(value) {
    const node = new Node(value)
    let currentNode = this._root
    let end = false
    while (!end) {
      if(node.data <= currentNode.data) {
        if(currentNode.left) currentNode = currentNode.left
        else {
          currentNode.left = node
          end = true
        }
      } else {
        if (currentNode.right) currentNode = currentNode.right
        else {
          currentNode.right = node
          end = true
        }
      } 
    }
  }

  each(iteratorFct) {
    this.asc(this._root).forEach(node => iteratorFct(node))
  }

  asc(node) {

    if (!node) {
      return []
    }

    const left = (node.left) ? this.asc(node.left) : []
    const value = [node.data]
    const right = (node.right) ? this.asc(node.right) : []

    return left.concat(value).concat(right)
  }

  desc(node) {

    if (!node) {
      return []
    }

    const left = (node.left) ? this.desc(node.left) : []
    const value = [node.data]
    const right = (node.right) ? this.desc(node.right) : []

    return right.concat(value).concat(left)
  }

 
}


