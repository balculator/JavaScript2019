/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
const forEach = (arr, callback) => {

  for (var i = 0; i < arr.length; i++) {
    //console.log(parseInt(element - 1));
    callback(arr[i], i, arr);
  }

};

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
const showFirstAndLast = arr => {

  let newArray = [];


  arr.forEach(function (item) {
    let newString = '';
    newString = item.charAt(0) + item.charAt(item.length - 1);
    newArray.push(newString);

  });

  return newArray;

};

module.exports = {
  forEach,
  showFirstAndLast
};
