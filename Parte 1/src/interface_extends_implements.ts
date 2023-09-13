//Interfaces parte II
//Esto es una interface
interface Person{
    id: number;
    name: string;
}

interface Employee extends Person{ //La interface 'Employee' hereda las propiedades de su interface madre que es 'Person', por lo tanto tiene las mismas propiedades que 'Person' y las que se agregan en su definición
    dept: string; 
}

interface Customer extends Person{ //La interface 'Customer' hereda las propiedades de su interface madre que es 'Person', por lo tanto tiene las mismas propiedades que 'Person' y las que se agregan en su definición
    country: string; 
}

const emp1: Employee = {
    id: 1,
    name: "Leon",
    dept: "Mantenimiento"
};

const cust1: Customer = {
    id: 1,
    name: "Joselito",
    country: "El Salvador"
}

const person1: Person = {
    id: 1,
    name: "Peredo"
}


interface Animal{
    name: string;
    getDogs:()=> void;
    getCats:()=> void;
}

class Zoo implements Animal{ //Se implementa la interfaz 'Animal' en la clase 'Zoo'. Para que la implementación se haga correctamente, se debe de inicializar los atributos y definir el funcionamiento de los métodos que están en el interface dentro de la clase a la que se implementa
    name = "Muhhh";
    getCats(): void{
        //Intrucciones
    }
    getDogs(): void{
        //Intrucciones
    }
}