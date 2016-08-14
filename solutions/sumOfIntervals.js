/* Description --------------
Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

https://www.codewars.com/kata/52b7ed099cdc285c300001cd
*/

function sumIntervals(intervals){
  const numArray = [];
  for (let i = 0, len = intervals.length; i < len; i++) {
    for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
      if (numArray.indexOf(j) === -1) numArray.push(j);
    }
  }
  return(numArray.length);
}
