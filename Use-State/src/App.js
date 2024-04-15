import React from "react";
import State1 from "./Components/State1";
import State2 from "./Components/State2";
import Objects from "./Components/Objects"
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Fruits from "./Components/Fruits";
import LazyInitialization from "./Components/LazyInitialization";

const App = () => {

    return(
        <div>
            {/* <h1>Hello</h1> */}
            {/* <State1 /> */}
            {/* <State2/> */}
            {/* <Objects/> */}
            {/* <Form1/> */}
            {/* <Form2/> */}
            {/* {<Fruits/>} */}
            <LazyInitialization/>
        </div>
    )
}

export default App;