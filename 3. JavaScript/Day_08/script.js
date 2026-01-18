// Array

const arr=[2,35,1,8,9,"rohit",true]
// console.log(arr);
// length
// console.log(arr.length);
// index
// console.log(arr[1]);
// at is latest, negative index le leta hai
// console.log(arr.at(0));
// console.log(arr.at(-1));


const newarr = structuredClone(arr);
console.log(newarr);

// push
arr.push(30)
console.log(arr);

// pop
arr.pop();
console.log(arr);

// unshift ,add element at start 
arr.unshift(10)
console.log(arr);

// shift, delete element from start
arr.shift();
console.log(arr);

// delete operation

delete arr[2];
console.log(arr);

console.log(arr);
console.log(arr.indexOf(8));
console.log(arr.lastIndexOf(8));
console.log(arr.includes(1));

// slice
console.log(arr.slice(2,4));
console.log(arr);

// splice
console.log(arr.splice(2,5));
arr.splice(2,3,"aman",50,40,30)
console.log(arr);

console.log(arr.toString());
console.log(arr.join(" "));

// concat
let arr1=[2,3,5,6,11]
let arr2=[2,3,5,6,11]

let newarr3=arr1.concat(arr2)
console.log(newarr3);

arr1.push(arr2);
console.log(arr1);

// 2D Array

let arr2d=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr2d);
console.log(arr2d[0][2]);

// flat is used to convert 2d array into 1d array 
let newarr1d=arr2d.flat()
console.log(newarr1d);

let abc=[1,2,3,4,5,6]
console.log(typeof abc);
console.log(Array.isArray(abc));

// let ac= new Array(123,415,678,789)
// console.log(ac); 
