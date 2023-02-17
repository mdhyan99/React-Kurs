import React, { useReducer } from "react";

// useReducer

// 3 conditions
const reducerTest = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return { state };
    }
};
const UseReduce = () => {
    // 2 ersteValue
    const ersteValue = {
        count: 0,
    };
    // 1 erstellen useReducer
    const [state, dispatch] = useReducer(reducerTest, ersteValue);
    return (
        <div>
            value is : {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>rest</button>
            <h3>{state.count}</h3>
        </div>
    );
};

export default UseReduce;
