const arr = [1, 2, 3, 4];

// const num1= arr[0]
// const num2= arr[1]

 const [num1, num2] = arr; 
 console.log(num1,num2);// 1 2

const [, , num3] = arr; 
console.log(num3);// 3


const ob ={id:"1" ,name :"mahmod"}

// const n = ob.name
// const i = ob.id
// console.log(n,i);

const {name,id}=ob
console.log(name,id);