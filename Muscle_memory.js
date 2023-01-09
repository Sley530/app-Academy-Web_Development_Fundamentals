function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
  }
  
  console.log(sayHello("world"));
  
  // In this exercise I will write 10 functions with different messages and console log them.
  // Function No. 1
  function intro(firstName, lastName)
  {
      return "My name is " + firstName + " " + lastName + ".";
  }
  
  console.log(intro("Paul-Wesley", "Jeanty"));
  
  // Function No.2
  function greet(fName, lName)
  {
      return "Hello " + fName + " " + lName + ".";
  }
  
  console.log(greet("Paul", "Wesley"));
  
  // Function No.3
function question(x, y) 
{
    let exp = x ** y;
    return exp; 
}

console.log(question(2, 4));

// Function No.4
function add(x, y)
{
    return x + y;
}

console.log(add(2, 4));

// Function No.5
function sub(x, y)
{
    return x - y;
}

console.log(sub(5, 15));

// Function No.6
function mul(x, y)
{
    return x * y;
}

console.log(mul(6, 6));

// Function No.7
function div(x, y)
{
    return x / y;
}

console.log(div(2, 4));

// Function No.8
function circ_perim(radius)
{
    return 2 * 3,14 * radius;
}

console.log(circ_perim(5));

// Function No.9
function circle_area(radius)
{
    let pi = 3.14;
    let area = pi * radius ** 2;
    return area;
}

console.log(circle_area(12));

// Function No.10
function divProof(dividend, divisor, quotient)
{
    let remainder = dividend % divisor;
    let div = quotient * divisor + remainder;

    if(div === dividend)
    {
        return true;
    }
        return false;
}

console.log(divProof(5, 2, 1));
