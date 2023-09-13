"use strict";
//Clases
class Person {
    city = 'Guadalajara';
    mensaje;
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
    greet() {
        console.log(this.mensaje);
    }
}
class Employee extends Person {
    //Se definen e inicializan los métodos y atributos de la clase (los atributos se pueden inicializar en el contructor al crear una intancia, para que no marque un error, pon un '!' antes de los dos puntos)
    id; //Private ocasiona que su valor solo sea escrito, sobrescrito o leído; por los mismos elmentos que haya en la clase. Readonly, se refiere a que una vez tiene un valor asignado, este no se podrá modificar, solo leer
    name;
    dept;
    constructor(id, name, dept, mensaje) {
        super(mensaje); //Llama al contructor de su clase madre
        this.setId(id);
        this.setName(name);
        this.setDept(dept);
    }
    //Setters
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setDept(dept) {
        this.dept = dept;
    }
    //Getters
    getId() {
        return this.id;
    }
    getMensaje() {
        return this.mensaje;
    }
    getName() {
        return this.name;
    }
    getDept() {
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
