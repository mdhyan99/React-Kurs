import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import person from "./data.json";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import Termin from "./components/Termin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TerminProvider } from "./context/TerminContext";
// const initialpersonenData = localStorage.getItem("personendata")?JSON.parse(localStorage.getItem("personendata"))
// : [];

function App() {
    const [personData, setPersonData] = useState(person);

    const onDelete = () => {
        setPersonData([]);
    };
    const onViewData = () => {
        setPersonData(person);
    };

    const entfernVonList = (id) => {
        setPersonData((currItems) =>
            currItems.filter((item) => item.id !== id)
        );
    };
    // useEffect(() => {
    //     setPersonData([])
    //  }, []); // wenn wir die Seite offnen wir sehen keien Termin

    return (
        <TerminProvider>
            <Container className="py-5">
                <BrowserRouter>
                    <div className="font color-body">
                        <DatesCount person={personData} />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <DatesList
                                        person={personData}
                                        entfernVonList={entfernVonList}
                                        onDelete={onDelete}
                                        onViewData={onViewData}
                                        setPersonData={setPersonData}
                                    />
                                }
                            />
                            <Route
                                path="/termin/:id"
                                element={
                                    <Termin
                                        person={personData}
                                        entfernVonList={entfernVonList}
                                    />
                                }
                            />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Container>
        </TerminProvider>
    );
}

export default App;
