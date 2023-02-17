// class Car {
//     color = "red";
//     printColor = () => {
//         console.log(this.color);
//         // this bedeutet color kommt von inerhalb class
//     };
// }
// export default Car;
class RED {
    printRED = ()=>{
        console.log("Hallo from RED Class");
    }
}

class Car extends RED { // extends  erbt die function und parameter von RED class
    constructor(color){
        super()
        this.farbe = color
    }
    printColor = () => console.log(this.farbe);
        // this bedeutet color kommt von inerhalb class
    
}



// class Car extends RED {
//     constructor(color){
//         super()
//         console.log("das ist costructor")
//     }
    
    
// }

export default Car;