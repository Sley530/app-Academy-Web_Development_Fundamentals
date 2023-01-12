/* In this exercise I will
 * Write a function isSubstring that takes in two strings, 
 * searchString and subString. The function should 
 * return true if subString is a part of thesearchString, 
 * regardless of upper or lower case, and false if otherwise.
 * 
 * @author Sley
 */

function isSubstring(searchString, subString) {
    
    let str = searchString.toLowerCase();
    let _str = subString.toLowerCase();
    
    return (str.indexOf(_str) !== -1);
      
  }
  
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
