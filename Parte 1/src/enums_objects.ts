//Enum
//Sirven para definir un conjunto de constantes con un nombre
enum Roles {
    User = 1,
    Admin = 2,
    SuperAdmin = 3,
}

enum Names {
    Person1 = 'Leon',
    Person2 = 'Jose',
    Person3 = 'Jeremias',
}

console.log(Roles.Admin);
console.log(Names.Person2);


//Objects
const Roles2 = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};

console.log(Roles2.Admin)