// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));

// if(firstNumber>secondNumber){
//     console.log(firstNumber + " is larger")
// }else{
//     console.log(secondNumber + " is larger")
// }


// ------------ x ------------- x -----------

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// let num = Number(prompt("Enter number with sign"));
// if(num > 0 ){
//     alert("the sign is +")
// }else if(num < 0 ){
//     alert("the sign in -")
// }else{
//     alert("the number is zero")
// }

// ------------ x ------------- x -----------

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.
// let firstNum = Number(prompt("Enter Number"))
// let secondNum = Number(prompt("Enter Number"))
// let thirdNum = Number(prompt("Enter Number"))
// let fourthNum = Number(prompt("Enter Number"))
// let fifthNum = Number(prompt("Enter Number"))

// let largest = firstNum;

// if(secondNum>largest){
//     largest = secondNum;
// }
// if(thirdNum > largest){
//     largest = thirdNum;
// }
// if(fourthNum > largest){
//     largest = fourthNum;
// }
// if(fifthNum > largest){
//     largest = fifthNum;
// }
// console.log("The largest number is " + largest);

// ------------ x ------------- x -----------


// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// for (var i=0; i<=15; i++){
//     if(i%2 === 0){
//         console.log(i + " is even")
//     }else{
//         console.log(i + " is odd")
//     }
// }

// ------------ x ------------- x -----------


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// let userMarks = Number(prompt("Enter your marks to calculate grade"));
// if(userMarks < 60){
//     alert("F")
// }else if(userMarks < 70){
//     alert("D")
// }else if(userMarks < 80){
//     alert("C")
// }else if(userMarks < 90){
//     alert("B")
// }else if(userMarks < 100){
//     alert("A")
// }


// ------------ x ------------- x -----------


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// ------------ x ------------- x -----------

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// **
// *
// * * *
// * * * *
// * * * * *

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);