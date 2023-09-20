"use script";

/* 1. Write a function generateSeries that takes a number n as input and returns an array of numbers
from 1 to n. */

function generateSeries(n){
  let arr = [];
  for(let i=1;i<=n;i++){
    arr.push(i);
  }
  return(arr);
}

console.log(`The Answer for the first problem is ---->`)
console.log(generateSeries(5));
console.log(generateSeries(0));
console.log(generateSeries(10));

/* 2. Write a function calculateArea that calculates the area of a rectangle given its width and height
as arguments. */

function calculateArea(width,height){
  return width * height;
}

console.log(`The Answer for the second problem is ---->`)
console.log(calculateArea(5,3));
console.log(calculateArea(10,8));
console.log(calculateArea(4,0));

/* 3. Write a function filterEvenNumbers that takes an array of numbers as input and returns a new
array containing only the even numbers. */

function filterEvenNumbers(numbers) {
  return numbers.filter((ele)=> ele%2==0 ? ele : '');
}

console.log(`The Answer for the third problem is ---->`)

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Should return [2, 4, 6]
console.log(filterEvenNumbers([11, 13, 17, 20])); // Should return [20]
console.log(filterEvenNumbers([])); // Should return []

/* 14. Write a function capitalizeWords that takes a sentence as input and returns the sentence with
the first letter of each word capitalized. */

function capitalizeWords(sentence) {
  if(!sentence){
    return '';
  }
  let strArr = sentence.split(' ').map((ele)=> ele[0].toUpperCase()+ ele.slice(1)).join(' ');
  return strArr;
}

console.log(`The Answer for the fourth problem is ---->`)
// Test Cases
console.log(capitalizeWords('hello world')); // Should return 'Hello World'
console.log(capitalizeWords('JavaScript is fun')); // Should return 'JavaScript Is Fun'
console.log(capitalizeWords('')); // Should return ''


/* 5. Create an object called calculator with methods add, subtract, multiply, and divide that perform
the respective operations on two numbers. */

const calculator = {
  // Your code here
  add:(a,b)=>{
    return a+b;
  },
  subtract:(a,b)=>{
    return a-b;
  },
  multiply:(a,b)=>{
    return a*b;
  },
  divide:(a,b)=>{
    return a/b;
  },

};

console.log(`The Answer for the fifth problem is ---->`)
// Test Cases
console.log(calculator.add(5, 3)); // Should return 8
console.log(calculator.subtract(10, 4)); // Should return 6

console.log(calculator.multiply(3, 7)); // Should return 21
console.log(calculator.divide(15, 3)); // Should return 5


/* 6. Write a function delayedGreeting that takes a name as input and logs a greeting message with
that name after a delay of 2 seconds. */

function delayedGreeting(name) {
  setTimeout(()=>{
    console.log(`Name will be returned after two seconds - ${name}`);
  },2000)
}

console.log(`The Answer for the sixth problem is ---->`)

delayedGreeting('Alice'); // Should log 'Hello, Alice!' after 2 seconds

/* 7. Write a function divideSafely that takes two numbers as input and returns their division. Handle
the case where the denominator is 0 by throwing an error. */

function divideSafely(numerator, denominator) {
  try{
    if(denominator === 0){
      throw new Error('denominator should not be zero!!!')
    }else{
      return (numerator / denominator);
    }
  }catch(err){
    console.log(err);
  }
}
// Test Cases
console.log(divideSafely(10, 2)); // Should return 5
console.log(divideSafely(8, 0)); // Should throw an error