/// <reference path = "utility.ts" /> 
//Al usar namespaces
let utils = Utility.Taxes;

console.log(utils.calculateIva(100));
console.log(utils.calculatePenaltyIva(200));

/*
Para usar namespaces necesitas cambiar varias configuraciones del tsconfig como:

"outFile": "./dist/output.js",                                  Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. 
"outDir": "./dist",                                             Specify an output folder for all emitted files. 
"module": "system",                                             Specify what module code is generated. 
*/