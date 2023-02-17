import React, { useState } from "react";

export default function StateExamle() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('text');
    const [text2, setText2] = useState('text2');
    const handelIncresse =() =>{
        setCount(count + 1)
    }
    const handeldescresse =() =>{
        setCount( - 1)

    }
    const handelInput =(e) =>{
        setText2(e.target.value)

    }
    return (
    <div>
<button onClick={handelIncresse}>+</button>
<button onClick={handeldescresse}>-</button> <br />
<label>count is {count}</label> <br/>

<input type="text" value={text} onChange={(e)=>setText(e.target.value) } /> <br></br>
<h3>Value ist <br></br>{text}</h3>

<input type="text" value={text2} onChange={handelInput } />
<h3>Value ist <br></br>{text2}</h3>

    </div>);
}
