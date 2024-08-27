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
// const image = document.querySelector(".image");

// button.addEventListener("click", function buttonClick() {
//     image.classList.toggle("image-active");
// });

// function buttonClick() {
//     image.classList.toggle("image-active");
// };


// window.addEventListener("load", function myFunction() {
//     image.classList.toggle("image-active");
// });



// const link = document.querySelector(".link");

// window.addEventListener("scroll", function myFunction() {
//     if (pageYOffset > 100) {
//         link.classList.add("link-active");
//     } else {
//         link.classList.remove("link-active");
//     }
// });

// String methods
// String extraction slice,substirng,substr   trim, trimstart, end , repeat, replace, replace all, indexof, lastindexof


// Objects and arrays

// const array = [40, 356, 564, 757, 8768, 76, 869, 46546, 20, 58678, 46457, 568758, 679869, 8879, 70906447, 4534, 5647, 847, 796, 36457, 568758, 56457567, 4547567, 78769, 454643, 758, 24536356544];

//  array.splice(3, 10,0,0,0,0,0);
// console.log(array);

// const array2 = array.sort(function (a, b) {
//     return b - a;
// });
// console.log(array2);

// const array1 = ["apple", "developer", "banana", "lemon"];
// console.log(array1.sort());
// console.log(array1.reverse());


// console.log(Math.max.apply(null,computersMarks));

// const developer = { name: "developer", maths: 50, physics: 56, computers: 60 };



// console.log(persons[1]);

// Splice and slice

// Array search indexof, findindexof, sort(),

// Array iteration methods foreach,map,filter,find,reduce,findlast,findindex, findlastindex

// const array = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1];

// array.forEach(function (value) {
//     console.log(value * 2);
// });

// const map = array.map((value) => {
//     return value * 2;
// });
// console.log(map);

// const filter = array.findLastIndex((value) => {
//     return value < 5;
// });
// console.log(filter);


// const reduce = array.reduce((value, total) => {
//     return value + total;
// });
// console.log(reduce);// 0 + 0 =0, 2 + 0 = 2,3 + 2 = 5

const persons = [
    {sno : 1, name: "developer", maths: 94, physics: 96, computers:  93, english: 95, sanskrit : 91, img: "../logo.svg"},
    {sno : 2, name: "hello", maths: 50, physics: 56, computers: 60 , english: 35, sanskrit : 40,},
    {sno : 3, name: "app", maths: 50, physics: 56, computers: 60, english: 35, sanskrit : 40, },
    {sno : 4, name: "web", maths: 50, physics: 56, computers: 60 , english: 35, sanskrit : 40,},
    {sno : 5, name: "aws", maths: 50, physics: 56, computers: 60 , english: 35, sanskrit : 40,},
    {sno : 6, name: "azure", maths: 50, physics: 56, computers: 60 , english: 35, sanskrit : 40,},
    {sno : 7, name: "hefew", maths: 50, physics: 56, computers: 60 , english: 35, sanskrit : 40,},
];

let table = "";

// const filter = persons.filter((value) => {
//     return value.maths < 90;
// });
persons.splice(2, 6, { sno: 8, name: "hi", maths: 50, physics: 56, computers: 60, english: 35, sanskrit: 40, }, { sno: 9, name: "application", maths: 50, physics: 56, computers: 60, english: 35, sanskrit: 40, });

persons.forEach((value) => {
    table += `
          <tr class="trow">
        <td>${value.sno}</td> 
        <td>${value.name}</td>
        <td>${value.maths}</td>
        <td>${value.physics}</td>
        <td>${value.computers}</td>
        <td>${value.english}</td>
        <td>${value.sanskrit}</td>
        <img src=${value.img}>
      </tr>
    `
    document.querySelector(".tbody").innerHTML = table;
});


