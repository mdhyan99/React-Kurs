const arr =[1,2,3,4,5,6]


const newArray = arr.map((item) =>{
    return item
});

console.log(newArray) // [ 1, 2, 3, 4, 5, 6 ]

const newArray2 = arr.map((item) =>{
    return item ===2
});

console.log(newArray2) // [ false, true, false, false, false, false ]