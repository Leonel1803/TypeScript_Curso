/*Sintaxis 3
import { PI, Person, generateRandomNumber } from './myModule';

const user: Person = {
    id: 1,
    name: "Leon"
}

console.log(PI);
console.log(user);
console.log(generateRandomNumber());
*/
/*Sintaxis 2
import { Person, generateRandomNumber } from './myModule';
import { PI as myPI} from './myModule';

const user: Person = {
    id: 1,
    name: "Leon"
}

console.log(myPI);
console.log(user);
console.log(generateRandomNumber());
*/
/*Sintaxis 3*/
import * as myCode from './myModule'

const user: myCode.Person = {
    id: 1,
    name: "Leon"
}

console.log(myCode.PI);
console.log(user);
console.log(myCode.generateRandomNumber());







/*
Cambios hechos en el tsconfig:

"moduleResolution": "node10",                         Specify how TypeScript looks up a file from a given module specifier. 
"outDir": "./dist",                                   Specify an output folder for all emitted files. 
*/