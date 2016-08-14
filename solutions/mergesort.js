/* Description --------------
Implement the "merge" function from MergeSort.

https://www.codewars.com/kata/mergesort-merge-function/javascript
*/

function mergesorted(a, b) {
  var merged = [],
      l = 0,
      r = 0;

  while (l < a.length && r < b.length) {
    if (a[l] < b[r]) merged.push(a[l++]);
    else merged.push(b[r++]);
  }

  return merged.concat(a.slice(l)).concat(b.slice(r));
}
