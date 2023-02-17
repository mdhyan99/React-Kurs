import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Category from "./components/Category";

import { FavoriteProvider } from "./context/FavoriteContex";
import FavoriteProduct from './components/FavoriteProduct'
import ProductCard from "./components/ProductCard";


function App() {
    // const [itemsData, setItemsData] = useState(items);

    // const allCategory = ["All", ...new Set(items.map((i) => i.category))];

    // const filterbyCategory = (cat) => {
    //     if (cat === "All") {
    //         setItemsData(items);
    //     } else {
    //         const newArr = items.filter((item) => item.category === cat);
    //         setItemsData(newArr);
    //     }
    // };
    // const filterbySearch = (word) => {
    //     if (word !== "") {
    //         const newArr = items.filter((el) =>
    //             el.title.toLowerCase().includes(word.toLowerCase())
    //         );
    //         // toLwoerCase....  das für suchen mit klein Buchstaben und Große Buchstaben und includes für teil von word was wir schreiben
    //         setItemsData(newArr);
    //     }
    // };
    return (
        <FavoriteProvider>
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Category />} />
                        {/* <Route path="/pizza" element={<Pizza />} /> */}
                        <Route
                            path="/pizza"
                            element={<Category category="Pizza" >
                                <div>jjj</div>
                                <img
                    variant="top"
                    className="img-item"
                    src={"./imags/pizza.avif"}
                    alt="gff"
                />
                            </Category>}
                        />
                        <Route
                            path="/getranke"
                            element={<Category category="Getränke" />}
                        />
                        <Route
                            path="/shawrma"
                            element={<Category category="Shawrma" />}
                        />
                        <Route
                            path="/salat"
                            element={<Category category="Salat" />}
                        />
                        <Route
                            path="/donner"
                            element={<Category category="Dönner" />}
                        />
                      <Route
                            path="/favoriteproduct"
                            element={<FavoriteProduct  />}
                        />
                         <Route
                            path="/fproductCard"
                            element={<ProductCard />}
                        />
                    </Routes>
                    {/* <MenuListe  /> */}
                </BrowserRouter>
     
            </div>
        </FavoriteProvider>
    );
}

export default App;
