import { useState, createContext } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

 export const ProductContext = createContext();
 function App() {

  const clickHandler =()=>{
    console.log("hgdhs");;
  }
  const [product, setProduct] = useState('Laptop');
  
    return (
        <ProductContext.Provider value={
          {
            product:product,
            clickHandler:clickHandler,
            setProduct:setProduct
            }}>
            <div className="App">
                <h1>Hooks</h1>
                <Sidebar />
                <Widget />
            </div>
        </ProductContext.Provider>
    );
}

export default App;
