## wie können wir localstorg in browser sehen
- wir drücken auf Apclication (oder auf Deutsch App)
- dann auf die linke menu wie drücken auf Local storge (oder auf Deutsch lokaler Speicher)

## wie können wir localstorge verwenden
```js

// Set
 window.localStorage.setItem("color","#F00")

 // Get
 console.log(window.localStorage.setItem("color")) // #F00
 console.log(window.localStorage.color) // #F00
 console.log(window.localStorage.["color"]) // #F00

 // Remove one
 window.localStorage.removeItem("color"); // remove Color von Localstorge

// Remove All
 window.localStorage.clear(); // remove All key von Localstorge

 // Set Color In Page
 document.body.style.backgroundColor = window.localStorage.setItem("color") // hier nimmt color von localstorg

 console.log(window.localStorage.color) //  storage {fontSize:.... .......}
 console.log(typeof window.localStorage) // object




```