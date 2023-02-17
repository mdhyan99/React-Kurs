import {useEffect,useState} from 'react';


const useFetchData = (url) => {
    const [state,setState] =useState([])
    useEffect(() => {
  
        fetch(url).then(response => response.json()).then(data => setState(data))
    
    }, []);
    return [state]
}

export default useFetchData;
