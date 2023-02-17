import React,{createContext,useState} from "react";

const WarenkorbContext =createContext()

export const  WarenkorbProvider =({children}) =>{
    // const [addKorb,setAddKorb]=useState("ggg")
return(
    <WarenkorbContext.Provider 
    value={{
    }}
    >
        {children}
    </WarenkorbContext.Provider>
)

}
export default WarenkorbContext