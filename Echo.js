/* In this exercise I will
 * Write a function echo that takes in 
 * a string and console.logs that string "echo-ized". 
 *  
 * @author Sley
 */

function echo(string) {
    let str = string.toUpperCase();
    let _str = string.toLowerCase();
    let _str_ = str + " ... " + string + " ... " + _str;
    console.log(_str_);
  }
  
  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
