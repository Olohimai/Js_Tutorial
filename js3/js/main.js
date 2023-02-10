const myVariable = "Mathematics";

//length methods
console.log(myVariable.length);

//string methods
console.log(myVariable.charAt(0));

//indexOf method shows the position of the first letter starting from 0

console.log(myVariable.indexOf("ati"));

//lastIndexOf is similar to indexOf method
console.log(myVariable.lastIndexOf("ath"));

//slice method if the number is less or equal to the number 5 it prints nothing else if the number is greater than 5 it print the letters accordingly (i.e 5,5 = , 5,6=ma 5,7=mat 2,3=t 2,4=th
console.log(myVariable.slice(2, 5));

//toUpperCase method returns all the string to upper case
console.log(myVariable.toUpperCase());

//toLowerCase Method returns all the string to lower case
console.log(myVariable.toLowerCase());

//includes method returns boolean data however this would return false because myVariable doesnt include "div"
console.log(myVariable.includes("div"));

//split method splits the string from the letter in the array note that e will not be included in the resulting string  ['Math', 'matics']
console.log(myVariable.split("e"));

//this split method will split the character in the array Mathematics ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']
console.log(myVariable.split(""));

//['Glory', 'Jon', 'doe']
console.log("Glory,Jon,doe".split(","))

//['Glory', 'Jon', 'doe']
console.log("Glory Jon doe".split(" "))

// check the mdn for more string methods
