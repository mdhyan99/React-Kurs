let oldArray = [1,2,3,4,5]
console.log(oldArray); // [ 1, 2, 3, 4, 5 ]

let newArray1 =[...oldArray,10,11,12]
console.log(newArray1); // [ 1, 2, 3, 4, 5,10,11,12 ]

let newArray2 =[...oldArray,10,11,12, ...oldArray]
console.log(newArray2); // [ 1, 2, 3, 4, 5,10,11,12 ,1,2,3,4,5 ]


let oldObject = {id:"1" ,name :"ahmed"}
console.log(oldObject); // { id: '1', name: 'ahmed' }

let newObject1={...oldObject,age:"33"}
console.log(newObject1); // { id: '1', name: 'ahmed', age: '33' }

let newObject2={...oldObject,name:"hasan"}
// hier ändert die parameter
console.log(newObject2); // { id: '1', name: "hasan" }

// let newObject2={...oldObject,name:""}
// console.log(newObject2); // { id: '1', name: "" }
// hier löcht die parameter

let sum=(...args) =>{
    // console.log(args[0]); // [1]
    return args.filter(item => item === 2) // prüft jede element wenn ist = 2 drück als array [2,........]

}
console.log(sum(1,4,2,7,2,3)); // [2,2] hier return array