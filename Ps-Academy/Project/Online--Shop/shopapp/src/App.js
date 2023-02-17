import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";


function App() {
    return (
        <div className="">
          <BrowserRouter >
            <Header />
            <NavBar />
            <Routes>
                        <Route path="/" element={<Category />} />
            
                        <Route
                            path="/herren"
                            element={<Category category="Herren" />}
                        />
                        <Route
                            path="/kinder"
                            element={<Category category="Kinder" />}
                        />
                        <Route
                            path="/frauen"
                            element={<Category category="Frauen" />}
                        />
                 
            
                    </Routes>
            {/* <ProductCard /> */}
          </BrowserRouter>
        </div>
    );
}

export default App;
