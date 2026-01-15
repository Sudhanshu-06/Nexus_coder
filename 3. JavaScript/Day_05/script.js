let a=10;
let b=a;
b=30;
console.log(b);
console.log(a);

// Primtive data type vs Non primitive data type
// Primtive data type: Immutable
// Non primitive data type: Mutable

// Object example

let obj1={
    name:"Aman",
    id:20
    
}
let obj2=obj1
console.log(obj1);
console.log(obj2);

obj2.id=30

console.log(obj1);
console.log(obj2);