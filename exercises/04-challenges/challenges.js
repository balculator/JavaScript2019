/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (checkString, ending) => {
  let checkStringArray = [];

  checkStringArray = [...checkString];

  if (checkStringArray[checkStringArray.length - 1] == ending) {
    return true;
  }
  else {
    return false;
  }
};

/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {string}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */


var repeatStringNumTimes = (repeatedString, numTimes) => {

  var repeated = '';

  for (var i = 0; i < numTimes; i++) {
    repeated = repeated + repeatedString;
  }

  return repeated;

};

/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {string}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */

var findLongestWordLength = (longString) => {

  var longStringArray = longString.split(' ');

  var longestWordLength = 0;

  for (var i = 0; i < longStringArray.length; i++) {
    if (longStringArray[i].length > longestWordLength) {
      longestWordLength = longStringArray[i].length;
    }
  }

  return longestWordLength;

};

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};
