class Node {
  constructor(value, prev=null, next=null){
    this._value = value
    this._prev = prev
    this._next = next
  }

  get value() {
    return this._value
  }
  set value(value) {
    this._value = val
  }

  get next() {
    return this._next
  }
  set next(node) {
    this._next = node
  }

  get prev() {
    return this._prev
  }
  set prev(node) {
    this._prev = node
  }
}

export class LinkedList { 

  constructor() {
    this._length = 0
    this._first = null
    this._last = null
  }

  /**
   * Insert at the end
   */
  push(value) {

    // Create new node with link to the last node
    const node = new Node(value, this._last, null)

    // Set next node of the current last node to created node
    if (this.length) this._last.next = node

    // Define created node as last node of our linked list
    this._last = node

    // if list is empty first = last
    if (!this.length) this._first = this._last

    // Increment list length
    this._length++

  }

  /**
   * Remove at the end
   */
  pop() {

    // Get popped value
    const poppedValue = this._last.value
    
    if (this.length > 1) {
      this._last.prev.next = null
      this._last = this._last.prev
    } else {
      this._last = null
      this._first = null
    }

    // Decrement list length
    this._length--

    // return popped value
    return poppedValue
  }

  /**
   * Remove at the beginning
   */
  shift() {

    // Get shifted value
    const shiftedValue = this._first.value

    if (this.length > 1) {
      this._first.next.prev = null
      this._first = this._first.next
    } else {
      this._last = null
      this._first = null
    }

    // Decrement list length
    this._length--

    // return shifted value
    return shiftedValue
  }

  /**
   * Insert at the beginning
   */
  unshift(value) {

    // Create new node with link to the first node
    const node = new Node(value, null, this._first)

    // Set previous node of the current first node to created node
    if (this.length) this._first.prev = node

    // Define created node as first node of our linked list
    this._first = node

    // if list is empty last = first
    if (!this.length) this._last = this._first

    // Increment list length
    this._length++

  }

  get length() {
    return this._length
  }

  count () {
    return this.length
  }

  /**
   * Delete first element in the list with param value
   */
  delete(value) {

    let current = this._first

    // Node loop
    while(current) {

      // current node match delete value
      if(current.value === value) {

        if (current.prev) current.prev.next = current.next
        else {
          // first node match
          this._first = current.next
        }

        if (current.next) current.next.prev = current.prev
        else {
          // last node match
          this._last = current.prev
        }

        // Decrement list length
        this._length--

        break;
      }

      // set current to next node
      current = current.next
      
    }

  }
}