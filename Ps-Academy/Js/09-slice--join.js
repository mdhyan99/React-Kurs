const arr1= ["a", "b","c", "d" ,"e","f"]

// slice
// const arr2 =arr1.slice(2,4)
// console.log(arr1);// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(arr2);// [ 'c', 'd' ]

// const arr3 =arr1.slice(2)
// console.log(arr1);// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(arr3);// [ 'c', 'd', 'e', 'f' ]

//  splice
// const arr4 =arr1.splice(2,2)
// console.log(arr1); // [ 'a', 'b', 'e', 'f' ]  hier ändert haupt array  ab 2 index löch 2 element
// console.log(arr4); // [ 'c', 'd' ]  fängt mit 2 index drück nachher 2 element

//  const arr5 =arr1.splice(-2)

//  console.log(arr1); //[ 'a', 'b', 'c', 'd' ]
//  console.log(arr5); // [ 'e', 'f' ]

// revese 
// const arr6 = arr1.reverse()
// console.log(arr1); // [ 'f', 'e', 'd', 'c', 'b', 'a' ]
// console.log(arr6); // [ 'f', 'e', 'd', 'c', 'b', 'a' ]

// concat

const arr0 =["a" ,"b", "c"] ;  const arr11 =[1,2,3]

const arr2=arr0.concat(arr1)
console.log(arr2); // ['a', 'b', 'c','a', 'b', 'c','d', 'e', 'f']
const arr3 = [...arr0,...arr11]
console.log(arr3); // [ 'a', 'b', 'c', 1, 2, 3 ]

// join
const arr22 = ["a","b","c","d"]

const arr222 = arr1.join (' - ')
console.log(arr222); // a - b - c - d - e - f