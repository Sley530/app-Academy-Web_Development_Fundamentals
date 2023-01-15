/* In this exercise I will
 * Write a function, countVowels(word), that takes in a string word 
 * and returns the number of vowels in the word.
 * Vowels are the letters "a", "e", "i", "o", "u".
 * 
 * @author Sley
 */

function countVowels(word) {
 let MyArray = ["a", "e", "i", "o", "u"];
  count = 0;
  for(let i = 0; i < word.length; i++){
   for(let j = 0; j < MyArray.length; j++){
     if(word[i] === MyArray[j]){
       count++;
       break;
    }   
   }
  }
  return count;
} 


function countVowels2(word) {
 let MyArray = ["a", "e", "i", "o", "u"];
  count = 0
  for(let i = 0; i < word.length; i++){
   if(MyArray.includes(word[i])){
     count++;
   }     
  }
  return count;
}

 
console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
