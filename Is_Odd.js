/* In this exercise I will
 * Write a function isOdd that takes in 
 * a number as an argument and returns true if the number is odd 
 * and returns false otherwise.
 *
 * @author Sley
 */

function isOdd(num) {
    if (num % 2 == 1) 
    {
        return false;
    } 
    
        return true;
  }
  
  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true