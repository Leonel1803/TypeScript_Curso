//Comando configuración TypeScript: tsc --init
const variable1 = 'Leonel';

//COmando compliar a un directorio específico: tsc --outDir dist index.ts


//Tipos de datos
let myTypeString: string = 'Hello World'; //String
let myTypeNumber: number = 32; //Numero
let myTypeBoolean: boolean = true; //Booleano


//Arreglos
let arrNumber: number[] = [1, 2, 3]; //Array de Números
let arrNumber2: Array<number> = [1, 2, 3]; //Array de Números
let arrString: string[] = ["Uno", "Dos", "Tres"]; //Array de Strings
let arrAny: any[] = ["Hola", true, 345]; //Array de cualquier dato


//Tuple
let tuplePlayers: [string, number, boolean] = ["Leon", 32, true]; //Tupla: array que sabe que tipo de dato hay en cada posición 


//Tuple Arrray
let players: [number, string][];
players = [[1, "Jorge"], [2, "Jose"], [3, "Juanito"]]; //Array de tuplas cada posición del arreglo tiene una tupla


//Inferencia de tipos
//TypEScript se encarga de asignar un valor a cualquier variable
//TS convierte una variable a un tipo de dato en específico después de que se le asigna su primer valor sin tener que especificar manualmente el tipo de dato
let myVariable2: string;

//let myVariable2 = 32 da error debido a que esta variable ya se había definido como string
let myVariable =  343;  //Inferencia de tipo


//Composicion de Tipos
//Unions
let myVariable3: string | number | null; //Esta variable puede agarrar cualquiera de estos tipos
myVariable3 = 32;
myVariable3 = 'Juan';
//myVariable3 = true; da error debido a que esta variable no puede tener valores booleanos según su definición


/*
Se cambiaron algunas lineas del tsconfig como:
"target": "es2022",                                   Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
"module": "commonjs",                                 Specify what module code is generated.
"rootDir": "./src",                                   Specify the root folder within your source files. 
"outDir": "./dist",                                   Specify an output folder for all emitted files. 
*/