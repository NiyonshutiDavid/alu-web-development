#!/usr/bin/env node


const args = process.argv.slice(2);


if (args.length === 0) {
  console.log(0);
} else if (args.length === 1) {

  console.log(0);
} else {
 
  const integers = args.map(arg => parseInt(arg, 10));

 
  const sortedIntegers = integers.sort((a, b) => b - a);


  const secondBiggest = sortedIntegers[1];

 
  console.log(secondBiggest);
}
