// npm i react-router-dom

import React from "react";
import NavBar from "./component/NavBar";
import Content from "./component/Content";
import About from "./component/About";
import Footer from "./component/Footer";
import ErrorNotFound from "./component/ErrorNotFound";
import Hom from "./component/Hom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    // const showFooter = () =>{  // **
    //   if(window.location.pathname === "/footer")
    //   {
    //     return <Footer />
    //   }
    // }
    return (
        <div className="App">
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hom />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="*" element={<ErrorNotFound />} />
                </Routes>
            </BrowserRouter>
            {/* {showFooter()}  // **
             */}
        </div>
    );
}

export default App;
