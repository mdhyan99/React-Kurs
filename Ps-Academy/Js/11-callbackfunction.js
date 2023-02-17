
// return parameter
const lowerCase =(str) => {
    return str.toLowerCase();
}

// higher order function  callbackfunction
const transform = (word,fn) =>{
    return fn(word)
}
console.log(lowerCase("AHMAD")); // ahmad
console.log(transform("MOHAMMAD",lowerCase)); // mohammad


// return function

const sayHi=(welcom)=>{
    return(name)=>{
        console.log(`${welcom} ${name}`);
    }
}
const say =sayHi("welcom")
console.log(say("ma"));// welcom ma
console.log(say("ahmad")); // welcom ahmad
console.log(say("haj")); // welcom haj

