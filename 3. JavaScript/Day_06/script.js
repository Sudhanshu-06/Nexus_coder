// primitive data type

const num=10;
// num=20; //eror
console.log(num);

// Non primtive data types
// error

// const obj={
//     id:10,
//     balance:200
// }
// obj.id=11;
// console.log(obj);

// let obj2={
//     id:20,
//     money:30
// }
// obj=obj2; // Not allowed
// console.log(obj);



// Strings in js

let str1= "Hello coder army!";
let str2= 'How are you?';
let str3= `I am fine.`
console.log(str1,str2,str3);

let price=90;
console.log(`Price of sugar is: ${price}`);

// string concatenation
let s1="hello ";
let s2="world";
console.log(s1+s2);

console.log(s1.length);

console.log('"hello coder army!"');

let message="Anu is very \nbadmash girl"
console.log(message);

let message1="Anupama"
console.log(message1);
console.log(message1[0]);
console.log(message1[1]);
console.log(message1.charAt(3));

// No change in original string it can return new string
console.log(message1.toUpperCase());
console.log(message1.toLowerCase());


let hero="Hello Coder Army";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.includes("Coder"));


let newstring = "HelloCoder"
// slice can take negative index also
console.log(newstring.slice(0,3));
// 
console.log(newstring.substring(0,3));

// substr

let st3="Hello Ji kaise ho"
console.log(st3.replace("Ji","Honey"));


let str4="Money! Honey! Sunny! funny";
console.log(str4.split("! "));

let str5= "             Hello ji    "
console.log(str5.trim());

// New way to create string

let str6= new String("Hello Coder Army!");
console.log(typeof str6, str6);