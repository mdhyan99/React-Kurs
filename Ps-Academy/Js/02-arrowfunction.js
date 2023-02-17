// Normal Function
function sum1(){
    // your code hier
}
function sayHallo(name){
    console.log(name);
}
sayHallo("hallo ma")

// so können wir zu arrow function änderen
let sayhallo = (name) =>{
    console.log(name);
}
sayHallo("hallo ma")



// Arrow Function
const sum2 =() =>{
     // your code hier
}

// 1 
const say1  =(name) =>{
    console.log(name);
}
say1("Arrow1")

// 2 wenn nur ein Opration 
const say2  =(name) =>console.log(name);

say2("Arrow2")

// 3 wenn nur ein Opration  und ein parameter
const say3  =num => num*2;

console.log(say3(3));

// 4 wenn nur ein Opration und keine parameter
const say4  = _ => 2;

console.log(say4());
