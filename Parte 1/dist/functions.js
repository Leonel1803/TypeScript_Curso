"use strict";
function printPosition(position) {
    console.log(`Latitude y Longitud son: LAT: ${position.lat} LONG: ${position.long}`);
}
function getNumber2() {
    return Math.floor(Math.random() * 50);
}
function getNumber() {
    return Math.floor(Math.random() * 100);
}
function greet(name) {
    console.log(`Hola ${name.toUpperCase()}`);
}
greet('Jose');
console.log(getNumber());
console.log(getNumber2());
printPosition({ lat: 3, long: 55 });
printPosition({ lat: 9 });
