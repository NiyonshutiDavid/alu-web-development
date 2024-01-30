#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Sin argumentos");
} else if (args.length === 1) {
  console.log("Argumento encontrado");
} else {
  console.log("Argumentos encontrados");
}