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
  {
    id: 0,
    sno: 1,
    name: "developer",
    maths: 94,
    physics: 96,
    computers: 93,
    english: 95,
    sanskrit: 91,
    img: "../logo.svg",
  },
  {
    id: 1,
    sno: 2,
    name: "hello",
    maths: 50,
    physics: 56,
    computers: 60,
    english: 35,
    sanskrit: 40,
  },
  {
    id: 2,
    sno: 3,
    name: "app",
    maths: 50,
    physics: 56,
    computers: 60,
    english: 35,
    sanskrit: 40,
  },
  {
    id: 3,
    sno: 4,
    name: "web",
    maths: 50,
    physics: 56,
    computers: 60,
    english: 35,
    sanskrit: 40,
  },
  {
    id: 4,
    sno: 5,
    name: "aws",
    maths: 50,
    physics: 56,
    computers: 60,
    english: 35,
    sanskrit: 40,
  },
  {
    id: 5,
    sno: 6,
    name: "azure",
    maths: 50,
    physics: 56,
    computers: 60,
    english: 35,
    sanskrit: 40,
  },
  {
    id: 6,
    sno: 7,
    name: "hefew",
    maths: 50,
    physics: 56,
    computers: 60,
    english: 35,
    sanskrit: 40,
  },
];

let table = "";

// const filter = persons.filter((value) => {
//     return value.maths < 90;
// });
// persons.splice(2, 6, { sno: 8, name: "hi", maths: 50, physics: 56, computers: 60, english: 35, sanskrit: 40, }, { sno: 9, name: "application", maths: 50, physics: 56, computers: 60, english: 35, sanskrit: 40, });

// persons.forEach((value) => {
//   table += `
//           <tr class="trow" id="${value.id}"
//         <td>${value.sno}</td>
//         <td>${value.name}</td>
//         <td>${value.maths}</td>
//         <td>${value.physics}</td>
//         <td>${value.computers}</td>
//         <td>${value.english}</td>
//         <td>${value.sanskrit}</td>
//         <img src=${value.img}>
//         <td><button onclick="buttonRemove(${value.id})">remove</button></td>
//       </tr>
//     `;
//   document.querySelector(".tbody").innerHTML = table;
// });

// function buttonRemove(id) {
//   console.log("button clicked" + id);
//   const row = document.getElementById(`${id}`);  // Find the row using the id
//   if (row) {
//     row.parentNode.removeChild(row);  // Remove the row from the table
//   }
// };

// Js date objects get, set methods
// Milliseconds

// Math objects round rounds to the nearest integer, ceil, floor, trunc, sign, pow, sqrt, abs, random.

// // const x = -81.9;
// // const y = 3;
// console.log(Math.floor(Math.random() * 900000 + 100000)); // 0 to 1 + 1000 1000 to 9999

// function buttonClick() {
//   document.querySelector(".heading").innerHTML = Math.floor(Math.random() * 900000 + 100000);
// };

// If else statements

// Switch

// const date  = new Date().getDay();
// switch (date) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   default:
//     console.log("object")
// };

// const apDistricts = [
//   "Anantapur",
//   "Chittoor",
//   "East Godavari",
//   "Guntur",
//   "YSR Kadapa",
//   "Krishna",
//   "Kurnool",
//   "Nellore",
//   "Prakasam",
//   "Srikakulam",
//   "Visakhapatnam",
//   "Vizianagaram",
//   "West Godavari",
//   "Anakapalli",
//   "Annamayya",
//   "Bapatla",
//   "Dr. B.R. Ambedkar Konaseema",
//   "Eluru",
//   "NTR",
//   "Palnadu",
//   "Parvathipuram Manyam",
//   "Sri Sathya Sai",
//   "Sri Potti Sriramulu Nellore",
//   "Tirupati",
// ];
// const tsDistricts = [
//   "Adilabad",
//   "Bhadradri Kothagudem",
//   "Hyderabad",
//   "Jagtial",
//   "Jangaon",
//   "Jayashankar Bhupalpally",
//   "Jogulamba Gadwal",
//   "Kamareddy",
//   "Karimnagar",
//   "Khammam",
//   "Kumuram Bheem Asifabad",
//   "Mahabubabad",
//   "Mahabubnagar",
//   "Mancherial",
//   "Medak",
//   "Medchal-Malkajgiri",
//   "Mulugu",
//   "Nagarkurnool",
//   "Nalgonda",
//   "Narayanpet",
//   "Nirmal",
//   "Nizamabad",
//   "Peddapalli",
//   "Rajanna Sircilla",
//   "Rangareddy",
//   "Sangareddy",
//   "Siddipet",
//   "Suryapet",
//   "Vikarabad",
//   "Wanaparthy",
//   "Warangal Rural",
//   "Warangal Urban",
//   "Yadadri Bhuvanagiri",
// ];
// const karnatakaDistricts = [
//   "Bagalkot",
//   "Ballari",
//   "Belagavi",
//   "Bengaluru Rural",
//   "Bengaluru Urban",
//   "Bidar",
//   "Chamarajanagar",
//   "Chikkaballapur",
//   "Chikkamagaluru",
//   "Chitradurga",
//   "Dakshina Kannada",
//   "Davanagere",
//   "Dharwad",
//   "Gadag",
//   "Hassan",
//   "Haveri",
//   "Kalaburagi",
//   "Kodagu",
//   "Kolar",
//   "Koppal",
//   "Mandya",
//   "Mysuru",
//   "Raichur",
//   "Ramanagara",
//   "Shivamogga",
//   "Tumakuru",
//   "Udupi",
//   "Uttara Kannada",
//   "Vijayapura",
//   "Yadgir",
// ];
// const arunachalPradeshDistricts = [
//   "Anjaw",
//   "Changlang",
//   "Dibang Valley",
//   "East Kameng",
//   "East Siang",
//   "Kamle",
//   "Kra Daadi",
//   "Kurung Kumey",
//   "Lepa Rada",
//   "Lohit",
//   "Longding",
//   "Lower Dibang Valley",
//   "Lower Siang",
//   "Lower Subansiri",
//   "Namsai",
//   "Pakke-Kessang",
//   "Papum Pare",
//   "Shi Yomi",
//   "Siang",
//   "Tawang",
//   "Tirap",
//   "Upper Siang",
//   "Upper Subansiri",
//   "West Kameng",
//   "West Siang",
// ];
// const tamilNaduDistricts = [
//   "Ariyalur",
//   "Chengalpattu",
//   "Chennai",
//   "Coimbatore",
//   "Cuddalore",
//   "Dharmapuri",
//   "Dindigul",
//   "Erode",
//   "Kallakurichi",
//   "Kanchipuram",
//   "Kanyakumari",
//   "Karur",
//   "Krishnagiri",
//   "Madurai",
//   "Mayiladuthurai",
//   "Nagapattinam",
//   "Namakkal",
//   "Nilgiris",
//   "Perambalur",
//   "Pudukkottai",
//   "Ramanathapuram",
//   "Ranipet",
//   "Salem",
//   "Sivaganga",
//   "Tenkasi",
//   "Thanjavur",
//   "Theni",
//   "Thiruvallur",
//   "Thiruvarur",
//   "Thoothukudi",
//   "Tiruchirappalli",
//   "Tirunelveli",
//   "Tirupattur",
//   "Tiruppur",
//   "Tiruvannamalai",
//   "Vellore",
//   "Viluppuram",
//   "Virudhunagar",
// ];


// function showDistricts() {
//   const statesDropdown = document.getElementById("states").value;
//   const districtsDropdown = document.getElementById("districts");

//   let districts = [];

//   switch (statesDropdown) {
//     case "ap":
//       districts = apDistricts;
//       break;
//     case "ts":
//       districts = tsDistricts;
//       break;
//     case "tn":
//       districts = tamilNaduDistricts;
//       break;
//     case "arunachal":
//       districts = arunachalPradeshDistricts;
//       break;
//     case "karnataka":
//       districts = karnatakaDistricts;
//       break;
//     default:
//       districts = [];
//   };

//   districtsDropdown.innerHTML = `<option value="">Select District</option>`;

//   districts.forEach((value) => {
//     const option = document.createElement("option");
//     option.value = value;
//     option.textContent = value;
//     districtsDropdown.appendChild(option);
//   });
// };


// SetTimeout and setInterval

// dom document object model and bom





// Todo list

const todoInput = document.querySelector(".todoinput");
const todoButton = document.querySelector(".todobutton");
const todoUl = document.querySelector(".todoul");

document.addEventListener("DOMContentLoaded", () => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
        storedTodoList.forEach((todo) => {
            addToDoDomList(todo);
        });
    };
});

function addToDoDomList(todo) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    div.classList.add("todo-div");
    li.classList.add("todo-li");
    li.innerText = todo.text;
    div.appendChild(li);
    todoUl.appendChild(div);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = 'Delete';
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        div.parentNode.removeChild(div);
        updateToDoList();
    });

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = 'Edit';
div.appendChild(editButton);

    editButton.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = li.innerText.trim(); // Trim whitespace

    li.innerHTML = ""; // Clear the list item
    li.appendChild(editInput);
    editInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            li.innerText = editInput.value;
            updateToDoList();
        }
    });

    });
};


function updateToDoList() {
    const todos = Array.from(todoUl.querySelectorAll(".todo-li")).map((item) => {
        return { text: item.innerText.trim() };
    });
    localStorage.setItem("todoList", JSON.stringify(todos));
};

todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() !== "") {
        const todo = { text: todoInput.value.trim() };
        addToDoDomList(todo);
        updateToDoList();
        todoInput.value = "";
    }
});

// Todo list

// js object notation stringify , parse

const myInfo = `{
  "Name": "GFG", 
  "Age":22,
  "Department" : "Computer Science and Engineering",
  "Year": "3rd"
}`


const Obj = JSON.parse(myInfo);
console.log(Obj.Name)  
console.log(Obj.Age)

const myInfo1 = {
  Name: "GFG",
  Age:22,
  Department : "Computer Science and Engineering",
  Year: "3rd"
  }
  const Obj1 = JSON.stringify(myInfo1);
  console.log(Obj1  )
  


// Real dom : js and virtual dom : react,angular and vue
  
// local : 5mb to 10mb,session : 5mb and cookies : 4kbs



