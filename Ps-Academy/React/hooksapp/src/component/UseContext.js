import React, { createContext, useState} from "react";

//1- create context
const colorContext = createContext();
//6-update data in context
//2- create provider
const UseContextProvider = ({children}) => {
    const [data,setData] = useState({id:"1",name:"ahmad"})

    const changeData=(id , name) =>{
        setData({id,name})
    }

    return (
        <colorContext.Provider value={
      {      data,
            changeData,}
        }
        >
  {children}
        </colorContext.Provider>
    );
};

//3- export context to use , provider to wrap all componnt 
export { UseContextProvider,colorContext};
