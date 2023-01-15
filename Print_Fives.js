/* In this exercise I will
 * Write a function printFives(max) 
 * that prints out the multiples of 5 that are less than the max.
 * 
 * @author Sley
 */

function printFives(max) 
{
    for (let i = 0; i <= (max/5); i++)
    {
        console.log(i * 5);
    }
} 

printFives(20);

