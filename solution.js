// You must RETURN your result in each function!
/**
 *  Using .forEach, add each number in the nums array to a new array.
 * @param nums => [1,2,3,4]
 */
function printNums(nums) {
  let newArray = []
  nums.forEach((num) => {
    newArray.push(num)
  })
  return newArray
}
/**
 * Using forEach, push the sum of n plus the index
 * to a new array and return the new array
 * @param nums => [1,2,3,4,5]
 */
function returnSums(nums) {
  let newArray2 = []
  nums.forEach((n, index) => {
    newArray2.push(n + index)
  })
  return newArray2
}
/**
 * Using forEach return a number that is the total sum of all numbers in the array of objects.
 * The key for each object will be n
 * @param objs => [{n:1}]
 */
function returnTotal(objs) {
  let sumObjects = 0
  objs.forEach((obj) => {
    sumObjects += obj.n
  })
  return sumObjects
}
/**
 * @param decimals => [2.30, 2.40, 32.99]
 * Using .map, return an array of decimals formatted as dollars.
 * EX: {
 * input: [12.34, 9.99],
 * output: ['$12.34', '$9.99']
 * }
 * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
 */
function printMoney(decimals) {
  return decimals.map((decimal) => {
    return '$' + decimal.toFixed(2)
  })
}
/**
 * @param values => [{name: 'Joe', happy:false}]
 * Using .filter, return an array of objects where happy equals true
 */
function returnAllTrueValues(values) {
  return values.filter((value) => {
    return value.happy === true
  })
}
/**
 * @param nums => [1,2,3,4]
 * Using .reduce, return the total sum of all numbers.
 * Each number should have 2 added to it.
 */
//   3
//   4 => 7
function addTwo(nums) {
  return nums.reduce((accumulator, num) => {
    return accumulator + (num + 2)
  }, 0)
}
/**
 * @param strings => ['g', 'f', 'z']
 * Using .reduce, return a new string containing each string from the strings array.
 */
function joinStrings(strings) {
  return strings.reduce((accumulator, string) => {
    return accumulator + string
  }) // no initial accumulator so reduce method sets 1st element in the array as the accumulator value & sets 2nd element of array as the string value
}
//Bonus
/**
 * @param objs => [{value: 1}, {value:2}, {value:23}]
 * Using .sort, sort the array of objects by the value key in ascending order
 * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
function sortObjectsByValue(objs) {
  return objs.sort((obj1, obj2) => {
    // callback function takes 2 objects in the arrar as parameters
    return obj1.value > obj2.value ? 1 : -1 // return 1 : function tells sort object 1 takes precedence in sorting over the object 2; return -1 is opposite; return 0 means obj 1 & obj 2 are equal to each other
    // if numbers can be written as return obj1.value - obj2.value
  })
}
module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
