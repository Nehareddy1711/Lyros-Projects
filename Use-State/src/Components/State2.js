// beginner mistake - import use state
import React,{useState} from "react"; 


// AIM: 
// Since we have issues with normal varible so react gives us a new way to create variables
// this new way is called useState


const State2 = ()=>{ // component renders again
    // lets treat useState like a function 

    // let x = useState(100)
    // console.log(x)
    // so this use state return an array with 2 index 
    // 1st index same number is retuned which we passed it like in this case 100 
    //2nd index is function 
    // console.log(x[0]) 
    // console.log(x[1])

    // so we concluded use state returns these two things 

    // other way to write use State: 
    // destructure: 

    let [count, setCount]  = useState(0)  

    // count is used to access the value intal is 0 
    // setCount is used to update the value, we should never update directly

    function inc(){
        // can I do like this?
        // count = count +1  // no, big No, never
        // variable can only be updated by their func
        setCount(count+1) // now if setcount chnages the value then 
    }


    return(
        <div>
            <h1>{count}</h1>  
            {/* so this h1 will load again */}
            {/* so if it loads it wil fetch latest value of count */}
            <button onClick={inc}> Increase</button> 
        </div>
    )
}

export default State2


// steps: what and why:
// 1) once button is clicked => inc function is called
// 2) inside inc(), setCount, is called
// 3) when setcount is called the components reloads/re-render again
// 4) if components render - it means each line of code will reload(only lines inside component)
