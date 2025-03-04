class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    let removed = this.first;
    if (this.size === 1) {
      this.last = this.first = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removed;
  }
}

let myQueue = new Queue();
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
