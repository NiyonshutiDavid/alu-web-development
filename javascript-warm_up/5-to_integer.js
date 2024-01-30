#!/usr/bin/env Node

const args = process.argv.slice(2);

if (args.length ===0) {
    console.log("Not a number");
}else{
    const inputNumber = parseInt(args[0]);
    if (!isNaN(inputNumber)) {
        console.log("My Number: ", inputNumber);
    }else {
        console.log("Not a Number");
    }
}
