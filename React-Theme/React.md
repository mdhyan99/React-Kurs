## what is React

-   A JavaScript library for building user interfaces

### Wenn die App nicht Zeigt und in Terminal zeigt Fehler :

-   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

## React erstelln

-   wir fangen mit folgene an :
    1
    -   -   npx create-react-app myapp dann,
    -   -   cd myapp
    -   -   npm start / npm run start
    -   npm install react@latest react-dom@latest // dass für die neu react vision istallieren
- ## oder

- npm init -y für package.json installieren
- npm i -D nodemon für node-modules installieren
-   "scripts": {
    "dev": "nodemon serverApi.js",
    "start": "node serverApi.js"
  }, wir äderen wenn wir npm start benuzt oder npm run dev
  - dann erstellen wir App.js und ...

## cod install

-   /_ npm install sass _/ für scss datei install
    ## Bootstrap
-   // npm install react-bootstrap bootstrap
-   wir mussen importieren
-   import 'bootstrap/dist/css/bootstrap.min.css'; //das muss in index.js
-   import Button from 'react-bootstrap/Button'; dass muss in App.js
-   <Button variant="primary">Primary</Button> in App.js innerhalbe return

### wir ändern in index.js zu :

```js
// import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
const rootDOMElement = document.getElementById("root");
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
console.log({ rootDOMElement, rootElement });
rootElement.render(
    <App />
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
);
```

### wir ändern in App.js zu :

```js
import logo from "./logo.svg";
import "./App.css";

function App() {
    const headline = "React";
    return (
        <div className="App">
            <header className="App-header">
                {/* für class begreifen von css */}
                <img src={logo} alt="Logo" />
                {/* {logo} hat als Vareabel geruft */}
                <h1 id="color">React</h1>
                <h1 id="color">{headline}</h1> // React
                <h2 id="color">Headline</h2> {/*  am besten nur ein id verwenden*/}
                <p>Lorem ipsum dolor sit amet</p>
            </header>
        </div>
    );
}

export default App;
```

## components

## Moment()

```js

```

```js
import moment from "moment";
import { useState } from "react";

// inerhalb  function schreiben wir  vor return

    const tody = moment().format("YYY-MM-DD")
     const[date,setDate] = useState(tody)

    //  innerhalb return
                  <DateForm date={date} setDate={setDate} />


```

## gibt andere möglichkeit im app.js

```js
import "./main.css";
const App = () => {
    const number = [1, 2, 3, 4, 5];

    const num1 = 4;
    const num2 = 3;

    const str1 = "hallo";
    const str2 = "word";

    const styleP = { color: "red", fontSize: "30px" }; // oder
    const styleP = { color: "red", fontSize: "30px" }; // oder

    const names = [
        { name: "maina", address: "cairo", phone: "12345", geneder: "male" },
        { name: "kareem", address: "giza", phone: "4445", geneder: "male" },
        { name: "omnia", address: "gaza", phone: "3435", geneder: "female" },
    ];

    return (
        <>
            <p> {number}</p> // 12345 derikt one foech oder filter...
            <p>{num1 + num2}</p> // 7<p>{str1 + " " + str2}</p> // hallo word
            <p style={{ color: "red", fontSize: "30px" }}> hallo word</p>
            // oder
            <p style={styleP}> hallo word</p>
            <p style className="para">
                {" "}
                hallo word
            </p> // von main.css .para
            <div className="userCard">
                <ul>
                    <li>
                        {" "}
                        <span>name:</span>
                    </li>
                    <li>
                        {" "}
                        <span>gender:</span>
                    </li>
                    <li>
                        {" "}
                        <span>phone:</span>
                    </li>
                    <li>
                        {" "}
                        <span>address:</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default App;
```

## useState()

```JS
// Uben schreiben wir
import {useState} from "react"
// dann schreiben wir folgene:
import { useState } from "react";
function UserForm({insertHandler}) {
    const [input, setIput] = useState({
        name: "",
        gender: "",
        phone: "",
        address: "",
    });
    // oder
    // const [input,setInput]= useState()
    const inputHandler = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setIput({ ...input, [inputName]: value });
        // oder
        // ...prevState das brengt letzte kopie vn useState
        // setIput((prevState) => ({ ...prevState, [inputName]: value })); // nem ein kopie dann ändern
    };
    const fromHandler = (e) => {
        e.preventDefault();
        // inputHandler(input)
        console.log(input);
    };
    return (
        <div>
            <form onSubmit={fromHandler}>
                <div className="controller">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={inputHandler}
                        value={input.name}
                    />
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

```

## useEffect React

-   in App.js schreiben wir

```js
// import React, { useState } from "react";
// wenn mit useEffect
import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState("");
    const handleCounter = () => setCounter((c) => c + 1);
    const handleTitle = () => setTitle("Change Title");

    useEffect(() => {
        console.log("inside useEffect 1");
        document.title = title;
    });
    //  wenn wir auf Change title clicken ändert die title und zeigt in console nur ein mal ("inside useEffect 1") und wenn wir auf Count Up clicken  zählt wie viel mal als zahl ("inside useEffect 1")

    useEffect(() => {
        console.log("inside useEffect 2");
        document.title = `Ỳou have clicked ${counter} times`;
    });
    // wenn wir clicken  auf count Up zählt in console wie viel mal ("inside useEffect 2") als text und zeigt uns in title   (Ỳou have clicked ${counter} times) . wenn wir auf Change title clicken ändert die title nicht und zeigt in console nur ein mal ("inside useEffect 2")

    useEffect(() => {
        console.log("inside useEffect 3");
        document.title = title;
    }, []);
    // // wenn wir  clicken auf count Up zeigt in console nur ein mal (inside useEffect 3) und zählt nicht in title  und  wenn wir auf Change title clicken die title ändert nicht    zeigt in console nur ein mal (inside useEffect 3)

    useEffect(() => {
        console.log("inside useEffect 4");
        document.title = `Ỳou have clicked ${counter} times`;
    }, []);
    // zeigt in console nur ein mal (inside useEffect 4) und  wenn wir  clicken auf count Up zählt nicht in console und zählt nicht in title    und  wenn wir auf Change title clicken die title ändert nicht

    useEffect(() => {
        console.log("inside useEffect 5");
        document.title = title;
    }, [title]);
    // // wenn wir auf Change title clicken ändert die title und zeigt in console nur ein mal (inside useEffect 5 )  wenn wir  clicken auf count Up zählt nicht in console und zählt nicht in title

    useEffect(() => {
        console.log("inside useEffect 6");
        document.title = title;
        return () => {
            console.log("cleanup");
        };
    }, [title]);
    // hier zuerst andärt title zu (Change Title) dann zeigt in console ("cleanup") dann zeigt in console nur ein mal (inside useEffect 6)
    useEffect(() => {
        console.log("inside useEffect 6");
        document.title = title;
        return () => {
            setTimeout(() => {
                setTitle("");
                console.log("cleanup");
            }, 1000);
        };
    }, [title]);
    //??????????

    useEffect(() => {
        console.log("inside useEffect 6");
        document.title = `Ỳou have clicked ${counter} times`;
    }, [counter]);
    // // wenn wir  clicken auf count Up zählt in console wie viel mal ("inside useEffect 6") als zahl   und (zeigt  und zählt) uns in title   (Ỳou have clicked ${counter} times) und  wenn wir auf Change title clicken die title ändert nicht

    return (
        <div className="container text-center pt-5">
            <button className="btn btn-primary" onClick={handleCounter}>
                {/* oder */}
                {/* <button className="btn btn-primary" onClick={() => setCounter(countUp)}> wir löchen function countUp(){
      setCounter(counter + 1)
    }  */}
                Count Up
            </button>
            <button className="btn btn-primary" onClick={handleTitle}>
                Change title
            </button>
            <h1 className="mt-3">{counter}</h1>
        </div>
    );
}
```

## UseContext

```js
in Page.js

import React from 'react'

export const UserContext =React.createContext();

function Page(props){
    const user ={name:'Mohammed' }

    
    return(
        <UseContext.provider value={user}>
        <h1>{user.name} </h1>

        </UseContext.provider>
    return(
}export default Page


in User.js 
import React from 'react'
import {UserContext} from './Page'
function User(props){
return(
    return(
}export default Page


```
## Router
- in terminal schreiben wir 
- npm i react-router-dom
## in App zum beispiel schreiben wir:
```js
import {BrowserRouter, Route ,Routes}  from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <nav>
                <Header />
            </nav>
           <div className="rout">
           <Routes>
                <Route path="/" element={<div>
                // hier wenn wir wollen ganz seiten in Startseite zeigen
                    <Startseite />
                    <Frauen />
                    <Herren />
                    <Kinder />
                    <Kontakt />
                </div>} />
                <Route path="/frauen" element={<Frauen />} />
                <Route path="/herren" element={<Herren />} />
                <Route path="/kinder" element={<Kinder />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
           </div>
        </BrowserRouter>
    );
}
export default App;
```
## in Header zum beispiel schreiben wir:
```js
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <NavLink className="navLink" to="/">Startseite</NavLink>
            <NavLink className="navLink" to="/frauen">Frauen</NavLink>
            <NavLink className="navLink" to="/herren">Herren</NavLink>
            <NavLink className="navLink" to="/kinder">Kinder</NavLink>
            <NavLink className="navLink" to="/kontakt">Kontakt</NavLink>
        </div>
    );
} 
```
## Icon in React
- in Terminal 
- npm install react-icons --save
  ## wir schreiben in datei wo wir icon zeigen wollen

```js
import {BiUser} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
return (
<nav className="navBar">
     <div className='icons' style={{color:"red"}}> <BiUser /> </div>
     <div className='icons' style={{color:"red"}}><FiHeart /> </div>
</nav>
  );

```
## UseContext
```js
// im Product.js schreiben wir
import React from 'react';
import { useState, createContext } from "react";

export const ProductContext = createContext();
export default function Product(props) {
  const [anzahlArtikel,setAnzahlArtikel] =useState(0)
  return (
    <ProductContext.Provider value={
      {
        anzahlArtikel:anzahlArtikel,
        setAnzahlArtikel :setAnzahlArtikel
      }
    }>
        {props.children}
        

      </ProductContext.Provider>
      //  children bedeutet ,dass wir useContext in alle datei benuzen können
  );
}
```
```js
// wo wir die useContext verwenden wollen schreiben wir :


import { useContext } from "react"; // hier wichtig
import { ProductContext } from "./Context/Product";  // hier wichtig

export default function Herren() {

    const {anzahlArtikel,setAnzahlArtikel} = useContext(ProductContext)  // hier wichtig
    console.log(anzahlArtikel,setAnzahlArtikel);

    const data_herren = data.filter((d) => d.category === "Herren");


const warenKorbzufügen =()=>{
    return(
        setAnzahlArtikel(anzahlArtikel + 1) // hier wichtig
    )
}    
    return (
        <>
                <div className="herrenGruppe">
                    {data_herren.map((el, index) => {
                        console.log(index);
                        return (
                            <div className="product" key={index}>
                            
                                <button onClick={warenKorbzufügen} {/* hier wichtig */}  className="warenbtn">
                                    In den Warenkorb
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
```
```js
// wir können in andere Datei useContext verwenden 
import { useContext } from 'react';   // hier wichtig
import { ProductContext } from '../Context/Product';  // hier wichtig
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const {anzahlArtikel} = useContext(ProductContext)   // hier wichtig
  return (
    <nav className="navBar">
    <div className="rigthIcons">
          <div  style={{color:"red"}}>  <NavLink className='icons'  to="/warenKorb" style={{color:"red"}}>
        {/* hier wichtig */} 
         {anzahlArtikel}    
         <AiOutlineShoppingCart /></NavLink></div>
 </div>
 </nav>
  );
}
```