"use strict";
function getBook() {
    return { id: 3, title: 'La Senda del Perdedor', author: 'Charles Bukowski' };
}
function printBook(libro) {
    console.log(libro.author);
    console.log(libro.title);
    if (libro.year != null) {
        console.log(`${libro.year} \n`);
    }
    else {
        console.log(``);
    }
}
const libro = {
    id: 1,
    title: 'Miedo a la Libertad',
    author: 'Erich Fromm'
};
const libro2 = {
    id: 2,
    title: 'De Animales a Dioses',
    author: 'Yuval Noah Harari',
    year: 2013
};
const libros = [libro, libro2]; //Arreglo de objetos de interface tipo 'Book'
const libro3 = getBook(); //Inferencia de tipo para objetos, en este caso a este objeto se le asigna automáticamente una interface de tipo 'Book'
printBook(libro);
printBook(libro2);
printBook(libro3);
