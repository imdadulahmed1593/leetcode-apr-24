// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Example 1:

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  if (!root) return res;

  const stack = [[root, `${root.val}`]];

  while (stack.length > 0) {
    const [node, path] = stack.pop();

    if (!node.left && !node.right) {
      res.push(path);
    }

    if (node.right) {
      stack.push([node.right, `${path}->${node.right.val}`]);
    }

    if (node.left) {
      stack.push([node.left, `${path}->${node.left.val}`]);
    }
  }

  return res;
};
