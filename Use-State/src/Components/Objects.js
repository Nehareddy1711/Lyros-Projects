import React,{useState} from "react";

const Objects=()=>{
    const[coins,setCoins]=useState({gold:0,silver:0,bronze:0})

    function incGold(){
        // setCoins(coins.gold+1)//0+1=1
        // setCoins({gold:coins.gold+1, silver:coins.silver+1,bronze:coins.bronze+1})
        setCoins({...coins,gold:coins.gold+1})

    }

    function incSilver(){
        setCoins({...coins,silver:coins.silver+1})
    }

    function incBronze(){
        setCoins({...coins,bronze:coins.bronze+1})
    }

    return(
        <div>
            <h1>Gold:{coins.gold} Silver:{coins.silver} Bronze:{coins.bronze}</h1>
            <button onClick={incGold}>Gold</button>
            <button onClick={incSilver}>Silver</button>
            <button onClick={incBronze}>Bronze</button>
         </div>
    )
    }

    export default Objects;



