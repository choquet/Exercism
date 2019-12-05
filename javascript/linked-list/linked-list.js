export class LinkedList extends Array { }

LinkedList.prototype.count = function() {
  return this.length;
}

LinkedList.prototype.delete = function(value) {
  const index = this.indexOf(value)
  if (index !== -1) {
    this.splice(index, 1)
  }
}