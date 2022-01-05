// Async Await 

let employee = {
    fname: "Kunal",
    lname: "Patel",
    age: 19
  };  

async function main(){
    console.log('Inside main function');
    const response = await employee;
    console.log('before response');
    const users = await response;
    console.log('users resolved')
    return users;
}

console.log("Before calling main")
let a = main();
console.log("After calling main")
console.log(a);
a.then(data => console.log(data))

console.log("End...")