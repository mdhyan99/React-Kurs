import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import {  Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import Catagory from "./components/Catagory";
import CardList from "./components/CardList";
import Product from "./components/Product";
import { items } from "./data";
// import { WarenkorbProvider } from "./context/WarenKorbContext";
// import WarenkorbContext from "./context/WarenKorbContext"; 
function App() {
    const [itemsData, setItemsData] = useState(items);
    // const {addKorb} =useContext(WarenkorbContext);
    // console.log(addKorb);

    // get all cat unig
    const allCategory = ["All", ...new Set(items.map((i) => i.category))];

    // filter by category
    const filterbyCategory = (cat) => {
        if (cat === "All") {
            setItemsData(items);
        } else {
            
            const newArr = items.filter((item) => item.category === cat);
            setItemsData(newArr);
        }
    };
    // filter by search form
    const filterbySearch = (word) => {
        if (word !== "") {
            const newArr = items.filter((el) =>
                el.title.toLowerCase().includes(word.toLowerCase())
            );
            // toLwoerCase....  das für suchen mit klein Buchstaben und Große Buchstaben und includes für teil von word was wir schreiben
            setItemsData(newArr);
        }
    };

    return (
      

        
        <div className="color-body font">
            
            <NavBar filterbySearch={filterbySearch} />
                <Header />
                
            <Catagory
                    filterbyCategory={filterbyCategory}
                    allCategory={allCategory} 
                    />  
                    
            <Container>
                {/* <Product  />  */}
                {/* <CardList itemsData={itemsData} />  */}
            <Routes>

             <Route path="/:catagrory" element={<Catagory
                    filterbyCategory={filterbyCategory}
                    allCategory={allCategory} 
                    />}/>  
                <Route path="/" element={<CardList itemsData={itemsData} />} />
                  <Route path="/product/:id" element={<Product itemsData={itemsData} />} />
                
                </Routes>
            </Container>
        </div>
       
    );
}

export default App;
