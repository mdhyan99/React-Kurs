import React ,{useContext} from 'react';
import { ProductContext } from '../App';

export default function Item() {
    const {product,clickHandler,setProduct}=useContext(ProductContext)
    console.log(product,clickHandler);
  return (
    <div>
<h1>{product}</h1>
<button onClick={()=>setProduct("fff")} >Click</button>

    </div>
  );
}
