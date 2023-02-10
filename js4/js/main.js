// an integer is a whole number
const myNumber = 42;
console.log(myNumber);

// a float is a decimal
const myNumberFloat = 45.1321;
console.log(myNumberFloat);

// a string
const myString = "45";
console.log(myString);

console.log(myString + 1);

console.log(myString === myNumberFloat); // FALSE (Because they are both different variable "45" & 45)
console.log(myString == myNumberFloat); //TRUE (they have the same value)

//to convert my string to number
console.log(Number(myString) + 2); //45 + 2 = 47

//check if they are the same data type
console.log(Number(myString) === myNumberFloat); //true same variable

console.log(Number("45")); //NaN
console.log(Number(undefined)); //NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// NUMBER METHODS
//THE Number.isInteger() method determined whether the passed valued is an integer
console.log(Number.isInteger(myString)); //false

//the Number.parseFloat() method converts a certain variable so the computer can understand and execute it i.e '2 + 3' is read as '2' '+' '3' but using parse will convert it to float
console.log(Number.parseFloat(myNumberFloat));

//this parsing also converts non numeric data type to numeric data type
console.log(Number.parseFloat(myString) + 4.8); //49.8
console.log(Number.parseInt(myString))

//toFixed method rounds up a decimal number
console.log(Number.parseFloat(myNumberFloat).toFixed(2));
console.log(myNumberFloat.toFixed(2));
//converst to string
console.log(myNumber.toString());

//returns a stringe converted to a number
console.log(typeof myNumber.toString());

//the NaN
Number.isNaN();
console.log(Number('glory')); //NaN
console.log(Number(4)); //4
console.log(Number.isNaN('glory')); // FALSE

//the global isNaN determines if a number is NaN or not
console.log(isNaN("glory")); //true


