import React ,{useRef,useContext} from 'react';
import { colorContext } from './UseContext';

export default function UseRef() {

    const {data,changeData} =useContext(colorContext)

    const valueInput = useRef(null)

    const foucs =() =>{
        valueInput.current.focus()
        console.log(valueInput.current.value);
        changeData(Math.random().toFixed(1)*10,valueInput.current.value)
    }

  return (
    <div>
        <div>useContext  `{data.id}` {data.name} from useRef.js</div>
      <input type="text" ref={valueInput} />
      <button onClick={foucs}>Foucs</button>
      <br />
    </div>
  );
}
