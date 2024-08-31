// PRIMITIVE

// 7 types : String, Number, Boolean , null, undefined , Symbol, BigInt

//REFERENCE (NON-PRIMITIVE)

// Array , Objects , Functions 

const id = Symbol('123'); //unique
const id1 = Symbol('123');

console.log(id === id1);

// +++++++++++++++ MEMORY +++++++++++++++++++++++++++

// STACK (Primitive)  -> copy milti hai.
//ex-
let myName = "Neha";
let newName = myName;
newName = "Visha";
console.log(myName);
console.log(newName);



// HEAP (Non-Primitive)  -> refernce milta hai.(jo bhi chnage karenge wo original value me change hoga.)
//ex-
let user1 = {
    name :"neha",
    age :21
}
let user2 = user1;
user2.age = 20;
console.log(user1.age);
