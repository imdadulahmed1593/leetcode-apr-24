class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode.val;
  }
  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode.val;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    // unoptimized - o(n)
    // let current = this.head;
    // for (let i = 0; i < index; i++) {
    //   current = current.next;
    // }
    // return current;

    // a bit optimized - o(n/2)
    let count, current;
    if (index <= this.length / 2) {
      //if index is in the first half
      // search in the first half
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      // search in the second half
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    if (index < 0 || index >= this.length) return false;

    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index === 0) return this.unShift(val);
    if (index === this.length - 1) return this.push(val);

    let foundNode = this.get(index);
    if (foundNode) {
      let newNode = new Node(val);
      foundNode.prev.next = newNode;
      newNode.next = foundNode;
      newNode.prev = foundNode.prev;
      foundNode.prev = newNode;
      this.length++;
      return this;
    } else {
      return false;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.prev = foundNode.next = null;
    this.length--;
    return foundNode;
  }
}

var myDll = new DoublyLinkedList();
myDll.push("first");
myDll.push("second");
myDll.push("third");
myDll.set(66, "newThird");
// // console.log(myDll.shift());
console.log(myDll.print());
// // console.log(myDll.insert(1, "barista"));
// console.log(myDll.remove(99));
// console.log(myDll);
// console.log(myDll.print());
// console.log(myDll.shift());
// console.log(myDll);
// console.log(myDll.shift());
// console.log(myDll);

// var doublyLinkedList = new DoublyLinkedList();
// console.log(doublyLinkedList.unshift(5));
