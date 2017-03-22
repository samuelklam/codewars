/*
 * Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
 *
 * https://www.codewars.com/kata/simple-pig-latin/javascript
 */

function pigIt(str){
  const stringArray = str.split(' ');
  stringArray.forEach((currVal, idx) => {
    stringArray[idx] = currVal.substring(1) + currVal[0] + 'ay';
  });
  return stringArray.join(' ');
}
