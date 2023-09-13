"use strict";
//Comando configuración TypeScript: tsc --init
const variable1 = 'Leonel';
//COmando compliar a un directorio específico: tsc --outDir dist index.ts
//Tipos de datos
let myTypeString = 'Hello World'; //String
let myTypeNumber = 32; //Numero
let myTypeBoolean = true; //Booleano
//Arreglos
let arrNumber = [1, 2, 3]; //Array de Números
let arrNumber2 = [1, 2, 3]; //Array de Números
let arrString = ["Uno", "Dos", "Tres"]; //Array de Strings
let arrAny = ["Hola", true, 345]; //Array de cualquier dato
//Tuple
let tuplePlayers = ["Leon", 32, true]; //Tupla: array que sabe que tipo de dato hay en cada posición 
//Tuple Arrray
let players;
players = [[1, "Jorge"], [2, "Jose"], [3, "Juanito"]]; //Array de tuplas cada posición del arreglo tiene una tupla
//Inferencia de tipos
//TypEScript se encarga de asignar un valor a cualquier variable
//TS convierte una variable a un tipo de dato en específico después de que se le asigna su primer valor sin tener que especificar manualmente el tipo de dato
let myVariable2;
//let myVariable2 = 32 da error debido a que esta variable ya se había definido como string
let myVariable = 343; //Inferencia de tipo
//Composicion de Tipos
//Unions
let myVariable3; //Esta variable puede agarrar cualquiera de estos tipos
myVariable3 = 32;
myVariable3 = 'Juan';
//myVariable3 = true; da error debido a que esta variable no puede tener valores booleanos según su definición
