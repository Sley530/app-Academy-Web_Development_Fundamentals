/* In this exercise I will
 * Write a function yell that takes in 
 * a string and returns a "yelled" version of that string.
 *
 * @author Sley
 */

function yell(str) {
    let _str = str + "!!!";
    return _str.toUpperCase;
  }
  
  console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
  console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"