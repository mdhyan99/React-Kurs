let Max = {
    große: 180,
    alter: 30,

    geburstag: function () {
        this.alter += 1;
    },
};
Max.geburstag();
console.log(Max.alter);

let obstliste = ["banana", "apfel", "Erdbeere"];

// hinzufügen am ende des Array
obstliste.push("kiwi");
console.log(obstliste);

// entfernen des letzten Element
obstliste.pop();
console.log(obstliste);

// hinzufügen am anfang des Array
obstliste.unshift("kiwi");
console.log(obstliste);

// entfernen des erstendes Element
obstliste.shift();
console.log(obstliste);

let obstliste1 = ["banana", "apfel", "Erdbeere"];
obstliste1.splice(1, 1);
console.log(obstliste1); // ['banana','Erdbeere']

let obstliste2 = ["banana", "apfel", "Erdbeere"];
obstliste2.splice(1, 0, "kiwi");
console.log(obstliste2); // ['banana', 'kiwi' , 'apfel','Erdbeere']

let obstliste3 = ["banana", "apfel", "Erdbeere"];
obstliste3.splice(1, 1, "kiwi");
console.log(obstliste3); // ['banana', 'kiwi', 'Erdbeere']

let obstliste4 = ["banana", "apfel", "Erdbeere"];
for (let i = 0; i < obstliste4.length; i++) {
    console.log(obstliste4[i]); // Banana
    // apfel
    //erdbeere
}
let obstliste5 = ["banana", "apfel", "Erdbeere"];
for (let i in obstliste5) {
    console.log(obstliste5[i]); // Banana
    // apfel
    //erdbeere
}

// forEach
obstliste5.forEach(function (value) {
    console.log(value); // Banana
    // apfel
    //erdbeere
});
obstliste5.forEach((value) => {
    console.log(value); // Banana
    // apfel
    //erdbeere
});

// while

let i = 0;
while (i < 10) {
    console.log(i); // 0 ... 9 als column
    i++;
}

let clickButten1 = document.querySelector("#click-button");
clickButten1.addEventListener("click", eingabe);

function eingabe() {
    console.log("Hallo button"); // wenn wir auf dem button(klick mich!) klicken zeigt uns in console Hallo button
}

let clickButten2 = document.querySelector("#click-button");
clickButten2.addEventListener("click", eingabe);

function eingabe() {
let input = document.querySelector('#input')
let output = document.querySelector('#output')

let newDiv = document.createElement('div')
let newContent = document.createTextNode(input.value)

newDiv.appendChild(newContent)
output.appendChild(newDiv)
input.value=""
}
