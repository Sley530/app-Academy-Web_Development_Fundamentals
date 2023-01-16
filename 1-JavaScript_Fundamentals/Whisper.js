/* In this exercise I will
 * Write a function whisper that takes in 
 * a string and returns a "whispered" version of that string.
 * 
 * @author Sley
 */ 

function whisper(str) 
{
    let _str = "..." + str + "...";
    return _str.toLowerCase();
}
  
  console.log(whisper("Hey Buddy")); // => "...hey buddy..."
  console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
  