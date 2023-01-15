/* In this exercise I will
 * Write a function logBetweenStepper(min, max, step) 
 * that takes in 3 numbers as parameters. 
 * The function should print out numbers between min and max at step intervals.
 * 
 * @author Sley
 */

function logBetweenStepper(min, max, step)
{
    let i = min;

    while (i <= max)
    {
        console.log(i);
        i += step;
    }
}

function logBetweenStepper2(min, max, step)
{
    for(let i = min; i <= max; i += step)
    {
        console.log(i);
    }
}


// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper2(-10, 15, 5);  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15
