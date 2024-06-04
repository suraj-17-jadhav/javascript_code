// import {apikey} from "./util.js"

import apikey from "./util.js";
console.log(apikey);

// used to print the consoel message
console.log("hello world");

// here user is object
const user = {
  name: "suraj",
  age: 21,
  education: "final year",
  greet() {
    console.log("good morning");
  },
};
// here we access the value in object
console.log(user.name);
console.log(user.age);
console.log(user.education);
console.log(greet());

// class of student
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet(name) {
    console.log("good morning" + name);
  }
}
// creating object of student class
const s1 = new Student("suraj", "suraj0149@gmail.com");
s1.greet("suraj");

// array in javascript
const sports = [
  "football",
  "basketball",
  "kho-kho",
  "cricket",
  "chess",
  "video gamiong",
  "table tennis",
];
// printing array elemenmts in an array
console.log(sports[0]);
console.log(sports[4]);
console.log(sports);
// push new element in an array
sports.push("bad minton");
console.log(sports);
// finding the index of football sport
const index = sports.findIndex((item) => {
  return item === "footbll";
});
console.log(index);
// map method on array
const copysports = sports.map((item) => {
  console.log(item + " ");
});
console.log(copysports);

//  array
const userdata = ["suraj", "suraj@gmail.com"];
// this is how we access the array elements
const firstname = userdata[0];
const email = userdata[1];
console.log(firstname);
console.log(email);
// array destructuring
const [name, gmail] = ["suraj", "suraj@gmail.com"];
console.log(name);
console.log(gmail);
// object
const year = {
  1: "fist year",
  2: "second year",
  3: "third year",
  4: "final year",
};
// this is how we access the object data
const first = year[1];
const second = year[2];
console.log(first);
console.log(second);
// object destructuring
const { std, college } = {
  std: 10,
  college: "suyash gurukul college",
};
console.log(std);
console.log(college);

// spread operator in an array
const store = ["mens wear", "ladies wear", "kids"];
console.log(store);
const str = ["shoes", "belt", "grossary"];
console.log(str);
// merge into single array
const merge = [...store, ...str]; //here we merge the array elements ito the single array
console.log(merge);
// wrong merge
const merge2 = [store, str]; // we can't do this because it will create the nested array

// spred operaror in an object
const customer = {
  name: "suraj",
  price: "200rs",
};
// spread operator in object
const extendCustomer = {
  isNew: false,
  ...customer,
};
console.log(extendCustomer);

// control structure in javascript
// if else statement in javascript
let password = prompt("enter a password");
let length = password.toString.length();
if (password.length === 9) {
  console.log("accepted");
} else if (password.includes("@")) {
  console.log("accepted");
} else {
  console.log("not accepted");
}
// for loop in javascript
const marks = [12, 33, 44, 2, 21, 43, 45];
for (const mark in marks) {
  console.log(mark);
}
for (let i = 0; i < marks.length; i++) {
  console.log(i);
}
// while loopin javascript
let i=0;
{
   console.log(marks[i]);
   i++;
}while(marks.length != 0);
// do-while loop in javascript
let j=0;
do{
    console.log(marks[j]);
    j++;
}while(marks.length != 0);

// passing functions as a values to the another function
setTimeout(()=>{
   console.log("hii suraj")
}, 3000);
// same sateTimeout but diff. way
const handleClick= () =>{
    console.log("college .... ")
}
setTimeout(handleClick, 4000);
// setTimeout code in for loop
for(let i=0;i<= 3; i++){
    setTimeout(()=>{
       console.log(i);
    },1000)
}
// setInterval code 
setInterval(()=>{
   console.log("hii .....suraj")
},3000);

// passing function as a value to theanother function
function handler(){
    console.log("hii i am handler function");
}
function greeting(handler){
    handler();
}
greeting(handler())

// defining the function inside the function
function init(){
    function greet(){
        console.log("hello ");
    }
    greet();
}
init();

// primitive and reference values
// object is called as reference values

// find array method 
const arr= [12,34,45,65,76];
const max= arr.find((ele)=> ele > ele);
console.log(max);
// array find method is used to get the single value as the output

// filter method in array
const word = ['suraj', 'mahesh', 'rutik', 'nilesh'];
const result= word.filter((word)=>{word.length > 4});
console.log(result)