/* Description --------------
You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

Your objective is to determine the length of the loop.

ttps://www.codewars.com/kata/52a89c2ea8ddc5547a000863
*/

function loop_size(node) {

  var hare = node.next.next;
  var tortoise = node.next;

  while (hare !== tortoise) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  var loopCounter = 1;

  hare = hare.next;

  while (hare !== tortoise) {
    loopCounter += 1;
    hare = hare.next;
  }

  return loopCounter;
}
