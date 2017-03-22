/*
 *  Write a function called sumIntervals that accepts an array of intervals
 *  and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
 *
 * https://www.codewars.com/kata/52b7ed099cdc285c300001cd
 */

function sumIntervals(intervals){
  return intervals
    .sort((a, b) => {
         return (a[0] <= b[0]) ? -1 : 1;
    })
    .reduce((acc, time) => {
        if (time[1] > acc.endTime) {
            acc.total += time[1] - Math.max(time[0], acc.endTime);
        }
        if (time[1] > acc.endTime) acc.endTime = time[1];
        return acc;
    }, {endTime: 0, total: 0})
    .total;
}
