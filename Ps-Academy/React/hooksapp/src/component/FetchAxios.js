
import React, { useEffect,useState } from "react";
import axios from 'axios'
const FetchAxios = () => {
    const [state,setState] =useState([])


    // fetch
    // const fetchData = async () => {
    //     await fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "GET", // hier möchte ich zum data ereichen
    //         // method:'post' // hier möchte ich data schicken zu api und speichern
    //     }).then(response => response.json()).then(data=>setState(data))
        
    // };




    // axios
    const fetchAxios = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setState(res.data)
    }


    useEffect(() => {
        fetchAxios();
    }, []);
    return (<div>
        {state.map((item) =>{
            return(
                <h2>{item.title}</h2>
            )
        })}
    </div>);
};

export default FetchAxios;
