#!/usr/bin/env node

const [, , arg1, arg2] = process.argv;

const formattedArg1 = arg1 ? arg1 : 'undefined';
const formattedArg2 = arg2 ? arg2 : 'undefined';

console.log(`${formattedArg1} is ${formattedArg2}`);

