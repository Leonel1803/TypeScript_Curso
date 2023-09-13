//Interfaces
interface Book{
    //Se definen el nombre de los atributos y métodos (propiedades) que cada objeto con este interface debe tener y su tipo de dato, sin embargo no se inicializan
    id: number;//(Atributo)
    title: string;//(Atributo)
    author: string;//(Atributo)
    year?: number; //(Atributo) El signo de interrogación indica que la asignación de esta propiedad es opcional
    isLoan?: (id: number)=> void //(Método) Lo que está entre parentesis es el argumento que recibe y lo que está despues de la flecha es el tipo que devuelve
}

function getBook(): Book{ //Función que retorna un interface tipo 'Book'
    return{id: 3, title: 'La Senda del Perdedor', author: 'Charles Bukowski'};
}

function printBook(libro: Book){
    console.log(libro.author);
    console.log(libro.title);
    if(libro.year != null){
        console.log(`${libro.year} \n`);
    }
    else{
        console.log(``);
    }
}

const libro: Book = { //Asignamos al objeto 'libro' las propiedades de la interface 'Book' las cuales deben ser asignadas
    id: 1,
    title: 'Miedo a la Libertad',
    author: 'Erich Fromm'
};

const libro2: Book = { 
    id: 2,
    title: 'De Animales a Dioses',
    author: 'Yuval Noah Harari',
    year: 2013
};

const libros: Book[] = [libro, libro2]; //Arreglo de objetos de interface tipo 'Book'

const libro3 = getBook(); //Inferencia de tipo para objetos, en este caso a este objeto se le asigna automáticamente una interface de tipo 'Book'

printBook(libro);
printBook(libro2);
printBook(libro3);