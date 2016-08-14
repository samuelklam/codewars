/* Description --------------
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

https://www.codewars.com/kata/simple-pig-latin/javascript
*/

function pigIt(str){
  var stringArray = str.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].substring(1) + stringArray[i][0] + 'ay';
  }
  return stringArray.join(' ');
}
