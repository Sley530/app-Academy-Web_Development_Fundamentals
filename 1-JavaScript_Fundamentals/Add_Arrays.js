/* In this exercise I will
 * Write a function combineArray(array1, array2) that takes in two arrays of numbers 
 * and returns the two arrays combined into a single array.
 * 
 * @author Sley
 */

function combineArray(array1, array2) {
    let MyArray = array1.concat(array2);
    return (MyArray);
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
