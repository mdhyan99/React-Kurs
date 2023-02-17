import React from "react";

function App() {

  window.localStorage.setItem("color","#F00")
  // speichert in Localstorge schlüssel color und Wert #F00

  window.localStorage.setItem("backgroundColor","#F50") 
  // speichert in Localstorge schlüssel backgroundColor und Wert #F50

  // window.localStorage.removeItem("color"); 
  // // löcht schlüssel color und Wert #F00 in local storge

  // window.localStorage.clear();
   // löcht alle schlüssel und wert in localstorge

   // Get Key
   console.log(window.localStorage.key(0));
   // hier erste index ist color 
  return (
    <div className="App">

    </div>
  );
}

export default App;
