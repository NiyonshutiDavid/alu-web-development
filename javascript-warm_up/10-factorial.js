#!/usr/bin/env node

function factorial(n) {
  
  if (isNaN(n) || n < 0) {
    return 1;
  }

 
  if (n === 0) {
    return 1;
  }

 
  return n * factorial(n - 1);
}


const input = process.argv[2];


const n = parseInt(input, 10);


console.log(factorial(n));
