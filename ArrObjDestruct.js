// Array Destructuring

var person = ["Kunal", "Patel", 23, ["GCET", "Vidhyanagar"]];

var [firstName, , age, [clg, city]] = person;

console.log(firstName);
// console.log(lastName);
console.log(age);
console.log(clg);
console.log(city);

console.log("===============================");

// Object Destructuring

var employee = {
  fname: "Kunal",
  lname: "Patel",
  age: 19,
  education: { clg: "GCET", city: "Vidhyanagar" },
};

var {
  fname,
  lname,
  age,
  education: { clg, city },
} = employee;

console.log(`First Name Is ${fname}
last name is ${lname} ${clg}`);
