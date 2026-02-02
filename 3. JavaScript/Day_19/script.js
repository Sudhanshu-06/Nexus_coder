console.log("Hello coder kaise ho");

// window is a global object
// Document - it can store whole html page and represent it
// window.document -> document
// with the help of javscript we can manipulate the web page

// console.dir(document)
// htmlpage => Dom => object => apply js properties on js

// document.getElementById('first').innerHTML= "Ham acche hai";

//obj.__proto__

const obj = document.getElementById("first")

// we can change class Name
//obj.className = "Aman";

obj.innerHTML= "Mai accha hu aap kaise ho";
console.log(obj);


const obj1 = document.getElementsByClassName("header1")[1]
obj1.innerHTML = "sare topics coverd hai";
console.log(obj1);

const obj2 = document.getElementsByTagName("li")[0]
obj2.style.color = "blue";



