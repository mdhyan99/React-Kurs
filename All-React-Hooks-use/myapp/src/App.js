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
    //  wenn wir auf Change title clicken ändert die title zu (Change Title) und zeigt in console nur ein mal ("inside useEffect 1") und wenn wir auf Count Up clicken  zählt wie viel mal als zahl ("inside useEffect 1")

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
    // ??????



    useEffect(() => {
        console.log("inside useEffect 7");
        document.title = `Ỳou have clicked ${counter} times`;
    }, [counter]);
    // // wenn wir  clicken auf count Up zählt in console wie viel mal ("inside useEffect 7") als zahl   und (zeigt  und zählt) uns in title   (Ỳou have clicked ${counter} times) und  wenn wir auf Change title clicken die title ändert nicht

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
