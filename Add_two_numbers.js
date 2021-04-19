/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/*
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Need to move through both lists to the end to get our number.
  // First we'll just go through the list.
  let currentOne = l1;
  let currentTwo = l2;
  let numOne;
  let numTwo;
  let result = [];
  let remainder = 0;
  while (currentOne !== null || currentTwo !== null) {
    numOne = 0;
    numTwo = 0;

    if (currentOne !== null) {
      numOne = currentOne.val;
      currentOne = currentOne.next;
    }
    if (currentTwo !== null) {
      numTwo = currentTwo.val;
      currentTwo = currentTwo.next;
    }

    let sum;
    if (remainder) {
      sum = numOne + numTwo + remainder;
    } else {
      sum = numOne + numTwo;
    }
    if (sum >= 10) {
      sum = sum % 10;
      remainder = 1;
    } else {
      remainder = 0;
    }
    result.push(new ListNode(sum));
  }
  if (remainder) {
    result.push(new ListNode(1));
  }
  for (let i = 0; i < result.length; i++) {
    if (!result[i + 1]) {
      break;
    } else {
      result[i].next = result[i + 1];
    }
  }

  return result[0];
};
