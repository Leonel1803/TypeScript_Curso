//variable
export const PI = 3.14;

//interface
export interface Person{
    id: number;
    name: string;
}

//function
export function generateRandomNumber(): number{
    return Math.floor(Math.random() * 100);
}

//export {PI, Person, generateRandomNumber} es otra forma de poder exportar. Debes quitar los exports de todos los mencionados para utilizar éste método