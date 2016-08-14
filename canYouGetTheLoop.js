/* Description --------------
You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

Your objective is to determine the length of the loop.

https://www.codewars.com/kata/52a89c2ea8ddc5547a000863
*/

function loop_size(node) {

  let hare = node.next.next,
      tortoise = node.next,
      loopCounter = 1;

  while (hare !== tortoise) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  hare = hare.next;

  while (hare !== tortoise) {
    loopCounter += 1;
    hare = hare.next;
  }

  return loopCounter;
}
