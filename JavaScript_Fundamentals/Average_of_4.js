/* In this exercise I will
 * Write a function averageOfFour(num1, num2, num3, num4) 
 * that takes in four numbers.
 * The function should return the average of all of the numbers.
 * 
 * @author Sley
 */

function averageOfFour(num1, num2, num3, num4)
{
    let avg = (num1 + num2 + num3 + num4) / 4;
    return avg;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5
