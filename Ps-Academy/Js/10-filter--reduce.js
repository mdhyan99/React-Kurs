const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map
const arr2 = arr1.map((item) => {
    return item > 2;
});
console.log(arr1); // [1, 2, 3, 4, 5,6, 7, 8, 9]
console.log(arr2); // [false, false, true,true,  true,  true,true,  true,  true]

// const arr22 = arr1.map((item) => {
//     if (item > 2) {
//         console.log(item); 1  2  3 4  5 6  7  8  9
//     } else {}
// });
// console.log(arr1); // [1, 2, 3, 4, 5,6, 7, 8, 9]
// console.log(arr22); //



// filter
const arr3 = arr1.filter((item) => item < 4)
console.log(arr1);// [1, 2, 3, 4, 5,6, 7, 8, 9]
console.log(arr3);// [ 1, 2, 3 ] gibt zurück array und prüft alle element zurück alle element die item < 4

// find
const arr33 = arr1.find((item) => item < 4)
console.log(arr1);// [1, 2, 3, 4, 5,6, 7, 8, 9]
console.log(arr33);// 1  gibt zurück value und erste element zurück die  item < 4 



// reduce

const arr4 = arr1.reduce((total,current) => total + current,0)
// total = 0
// 0 + 1(current) = 1(total)
// 1 + 2 =3
// 3 + 3 = 6
// 6 + 4 = 10.....
// ..... =45
console.log(arr1);// [1, 2, 3, 4, 5,6, 7, 8, 9]
console.log(arr4); // 45 zurück value   hier 1+2+3...+9


const arrstr =["a","b","c"] 
const arr5 = arrstr.reduce((total,current) => total + current)
console.log(arrstr);// [ 'a', 'b', 'c' ]
console.log(arr5); // abc

// sort 
const arr = [7,3,4,10,14,2,0,9,8]
const arrsort = arr.sort()
console.log(arr);     // [0, 10,14,2, 3, 4,7, 8, 9]
console.log(arrsort); // [0, 10,14, 2, 3, 4,7, 8, 9]


const arrr1 = [7,3,4,10,14,2,0,9,8]
const arrr1sort = arr.sort((a,b)=>{
    if(a > b){return 1}// wenn ja return gleich value
    if(a < b){return -1}// wenn ja  tauch die beide value
})
console.log(arrr1);     // [7,3,4,10,14,2,0,9,8]
console.log(arrr1sort); // [0,2,3,4,7,8,9,10,14]

const arrr2 = [7,3,4,10,14,2,0,9,8]
const arrr2sort = arr.sort((a,b)=>{
    if(a < b){return 1} // wenn ja return gleich value
    if(a > b){return -1} // wenn ja  tauch die beide value
})
console.log(arrr2);     // [7,3,4,10,14,2,0,9,8]
console.log(arrr2sort); // [14,10,9,8,7,4,3,2,0]
