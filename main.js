// single line comments.
/* Multiple lines comments.*/

// Js outputs
// 4 ways
// y = 500000;
// x = "Hello developer";

// document.getelementbyid("id").innerHTML = "Hello world";

// // inner.HTML
// // document.write(x);
// console.log(x);
// window.alert(x);
// window.prompt(x);
// window.confirm(x);

// Js statements and semicolon;

// Js cases camel case, pascal case, snake or under scroll case

// var bankBalanceHistoryUnionBank = 50;
// console.log(bankBalanceHistoryUnionBank);

// let BankBalance = 500;
// console.log(BankBalance);

// const bank_balance = 600;
// console.log(bank_balance);


// Js keywords let,var,const,function,if,switch,for,return and try

// Variables var before 2015,let and const - ES6 version (Ecma - script 6)


// Scopes Block scope let and const, functional scope, global scope var.


// Types of JavaScript Operators
/* Arithmetic Operators
Assignment Operators
Comparison Operators == and ===
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators */



// Data types 2 types primitive and non-primitive

// string, number, boolean, null, undefined,


// Functions named functions, arrow functions, immediately invoked function expression(IIFE), anonymous function, constructor function, async function, callback functions.


// HTML Events some time browser does and some times user.

// const button = document.querySelector(".button");
const image = document.querySelector(".image");

// button.addEventListener("click", function buttonClick() {
//     image.classList.toggle("image-active");
// });

function buttonClick() {
    image.classList.toggle("image-active");
};


window.addEventListener("load", function myFunction() {
    image.classList.toggle("image-active");
});



const link = document.querySelector(".link");

window.addEventListener("scroll", function myFunction() {
    if (pageYOffset > 100) {
        link.classList.add("link-active");
    } else {
        link.classList.remove("link-active");
    }
});

// String methods
// String extraction slice,substirng,substr   trim, trimstart, end , repeat, replace, replace all, indexof, lastindexof
const string = `hello, developer, web`;

const string1 = string.substr(10, 5);
console.log(string1);
// Objects and arrays











