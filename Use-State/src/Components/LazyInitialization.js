import React,{useState} from "react";


function hello(){
    console.log("hello")
    return 0
}

const LazyInitialization=()=>{
    const [count,setCount]=useState(()=>hello())

    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}
export default LazyInitialization;


//summary of lazy initialization

//Inside the usestate the code that you are writing it is supposed to work only one time but it works each and every time when component reload/rerender.

//so you can avoid this if you put a call back inside the usestate.