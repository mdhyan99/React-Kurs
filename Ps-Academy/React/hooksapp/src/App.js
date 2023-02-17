// ueContexts
import React, { useContext } from "react";
// useContext ist hier useContextApi
import { colorContext } from "./component/UseContext";

import StateExamle from "./component/UseState";
import UseEffect from "./component/UseEffect";
import UseRef from "./component/UseRef";
import UseMemo from "./component/UseMemo";
import UseReduce from "./component/UseReduce";
import UseCostomHook from "./component/UseCostomHook";
import FetchAxios from "./component/FetchAxios";

function App() {
    //5- use context
    const { data } = useContext(colorContext);

    return (
        <div className="App">
            <FetchAxios />
            <StateExamle />
            <UseEffect />
            <UseRef />
            <div>
                {" "}
                useContext `{data.id}` `{data.name}`from App.js{" "}
            </div>{" "}
            {/* ==> white */}
            <UseMemo />
            <UseReduce />
            <UseCostomHook />
        </div>
    );
}

export default App;
