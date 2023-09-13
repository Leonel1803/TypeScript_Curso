function printPosition(position: {lat: number, long?:number}){ //Se pasa un objeto como parámetro. El signo de interrogación indica que ese parámetro es opcional
    console.log(`Latitude y Longitud son: LAT: ${position.lat} LONG: ${position.long}`)
}

function getNumber2(): number{ //Se especifica que retorna un número
    return Math.floor(Math.random() *50);
}

function getNumber(){ //También hay inferencia de tipo de dato
    return Math.floor(Math.random() *100);
}

function greet(name){ //Cuando no hay ningun retorno, se infiere que es una función que retorna void
    console.log(`Hola ${name.toUpperCase()}`);
}

greet('Jose');
console.log(getNumber());
console.log(getNumber2());
printPosition({lat: 3, long: 55});
printPosition({lat: 9});