//Clases
class Person {
    protected city = 'Guadalajara';
    protected mensaje!: string;

    constructor(mensaje: string){
        this.mensaje = mensaje;
    }

    public greet(){
        console.log(this.mensaje);
    }
}

class Employee extends Person{ //Al ser una subclase de 'Person' hereda sus métodos, atributos y constructor si es que es requerido ('super()')
    //Se definen e inicializan los métodos y atributos de la clase (los atributos se pueden inicializar en el contructor al crear una intancia, para que no marque un error, pon un '!' antes de los dos puntos)
    private readonly id!: number; //Private ocasiona que su valor solo sea escrito, sobrescrito o leído; por los mismos elmentos que haya en la clase. Readonly, se refiere a que una vez tiene un valor asignado, este no se podrá modificar, solo leer
    private name!: string;
    private dept!: string;

    
    
    public constructor(id: number, name: string, dept: string, mensaje: string){ //Constructor
        super(mensaje); //Llama al contructor de su clase madre
        this.setId(id);
        this.setName(name);
        this.setDept(dept);
    }

    //Setters
    public setId(id: number){
        this.id = id;
    }

    public setName(name: string){
        this.name = name;
    }

    public setDept(dept: string){
        this.dept = dept;
    }

    //Getters
    public getId(): number{
        return this.id;
    }

    public getMensaje(): string{
        return this.mensaje;
    }

    public getName(): string{
        return this.name;
    }

    public getDept(): string{
        return this.dept;
    }
}

const emp = new Employee(5567918, "Leon", "Ventas", "Hola Amiguitos");
console.log(emp.getId());
console.log(emp.getName());
console.log(emp.getDept());
//console.log(emp.dept); dep es private, por lo tanto solo elementos dentro de su clase pueden acceder a el
//console.log(emp.mensaje); mensaje es protected, por lo tanto solo puede ser accedido por sus subclases o interfaces
emp.greet();