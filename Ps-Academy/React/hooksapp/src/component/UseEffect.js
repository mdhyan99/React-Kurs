import React,{useEffect,useState} from 'react';

export default function UseEffect() {

    const [count, setCount] = useState(0);

    // run everytime this component rerender 
//     useEffect(()=>{
//         console.log("hallo from useEffect");
//     })
//  // run only once (when the component get mounte "change")
//     useEffect(()=>{
//         console.log("hallo from useEffect");
//     },[])

     // run everytime my condition ist change
    useEffect(()=>{
        console.log("hallo from useEffect");
    },[count])
   
    const handelIncresse =() =>{
        setCount(count + 1)
    }
   
  return (
    <div>
<button onClick={handelIncresse}>+</button>
<label>count is {count}</label> <br/>

      UseEffect
    </div>
  );
}
