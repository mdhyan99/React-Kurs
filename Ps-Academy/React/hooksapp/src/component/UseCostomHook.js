import React from 'react';

import useFetchData from '../costomHooks/UseFetchData';

const UseCostomHook = () => {
const [state] =useFetchData('https://jsonplaceholder.typicode.com/todos')
 
  return (
    <div>
      {state.map((item)=>{
        return (<p key={item.id}>{item.title}</p>)
      })}
      
    </div>
  );
}

export default UseCostomHook;
