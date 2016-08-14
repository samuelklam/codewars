/* Description --------------
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

https://www.codewars.com/kata/52774a314c2333f0a7000688
*/

function validParentheses(parens){
  let str1 = '()';
  let counter = 0;
  while (parens.length) {
    (parens.indexOf(str1) !== -1) ? parens = parens.replace(str1, '') : counter++;
    if (counter !== 0) return false;
  }
  return true;
}
