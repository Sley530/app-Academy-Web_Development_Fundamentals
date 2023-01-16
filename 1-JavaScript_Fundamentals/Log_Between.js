/* In this exercise I will
 * Define a function logBetween(lowNum, highNum) 
 * that will print every number from lowNum to highNum, inclusive. 
 * Inclusive means that the range includes lowNum and highNum.
 * 
 * @author Sley
 */

function logBetween(lowNum, highNum) 
{
    
    for(let i = 0; i <= (highNum - lowNum); i++)
    {
        console.log(lowNum + i);
    } 
    
}

logBetween(-1, 2);
logBetween(14, 6);
