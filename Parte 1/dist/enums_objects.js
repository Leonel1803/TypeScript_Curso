"use strict";
//Enum
//Sirven para definir un conjunto de constantes con un nombre
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
var Names;
(function (Names) {
    Names["Person1"] = "Leon";
    Names["Person2"] = "Jose";
    Names["Person3"] = "Jeremias";
})(Names || (Names = {}));
console.log(Roles.Admin);
console.log(Names.Person2);
//Objects
const Roles2 = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(Roles2.Admin);
