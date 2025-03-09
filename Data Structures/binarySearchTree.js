class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          return null;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    // let found = false;
    while (current) {
      // while (current && !found) {
      if (current.val === value) {
        // found = true;
        return current;
      } else if (current.val > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
console.log(binarySearchTree);
var foundNode = binarySearchTree.find(200);
console.log(foundNode); // 20
// console.log(foundNode.left); // null
// console.log(foundNode.right); // null

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// var foundNode = binarySearchTree.find(120);
// console.log(foundNode); // undefined
