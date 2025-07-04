// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let op = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      op.next = list1;
      list1 = list1.next;
    } else {
      op.next = list2;
      list2 = list2.next;
    }
    op = op.next;
  }
  op.next = list1 || list2;

  return dummy.next;
};


// python implementation
// class Solution:
    // def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        // dummy = prev = ListNode(0)

        // p1, p2 = list1, list2
        // while p1 and p2:
            // if p1.val < p2.val:
               //  prev.next = p1
               //  p1 = p1.next
            // else:
               //  prev.next = p2
               //  p2 = p2.next
            // prev = prev.next

        // if p1:
            // prev.next = p1
        // else:
           //  prev.next = p2

        // return dummy.next
