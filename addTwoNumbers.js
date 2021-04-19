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
