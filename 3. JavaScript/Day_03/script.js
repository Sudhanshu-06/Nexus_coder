// Non primitive data types
// Array,Object,function

// Array
let arr=[10,20,30,"Aman",null]
console.log(typeof arr,arr);

// Object
// Key value-pair

let obj={
    name:"Aman",
    age:25,
    city:"Pune"
}
console.log(typeof obj,obj);

// function

let fun = function(){
    console.log("Hello coder army");
}
fun()


// Type conversion

let account_balance = "100";
console.log(typeof account_balance,account_balance);
let num = Number(account_balance)
console.log(typeof num,num);

// Boolean convert to number

let x=true;
console.log(Number(x));

let account="100xs"
console.log(Number(account));

// null
let x1 = null;
console.log(Number(x1));

// undefined
let x2 = undefined
console.log(Number(x2));

// convert into string

let ab=20;
console.log(typeof String(ab));

let ax=true;
console.log(typeof String(ax));