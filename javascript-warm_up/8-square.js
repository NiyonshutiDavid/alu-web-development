#!/usr/bin/env node

const size = parseInt(process.argv[2]);

if (isNaN(size) || process.argv.length !== 3) {
  console.log("Missing size");
} else {
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }
}

