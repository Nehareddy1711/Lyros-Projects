import React,{useState,useEffect} from "react";

const Basics=()=>{
    const[gold,setGold]=useState(0);
    const[silver,setSilver]=useState(0);
    const[copper,setCopper]=useState(0);

    console.log("Gold-outside use effect",gold)
    // in silver only outside code executes not inside
      useEffect(()=>{
        console.log("Gold  and silver inside: "+gold+" , "+silver)
    
    },
        
        [gold, silver]
    )
      
    // 2 condition: 

    // when clicked on gold 
    //  => both line number 8 and 11 is executing
    // so line 11 is a code which executes only when gold changes beauuse of use effect

    // when clicked on others
      // only line 8 is executing


    return(
        <div>
            <h1>Gold:{gold},Silver:{silver},Copper:{copper}</h1>
            <button onClick={()=>setGold(gold+1)}>Add Gold</button>
            <button onClick={()=>setSilver(silver+1)}>Add Silver</button>
            <button onClick={()=>setCopper(copper+1)}>Add Copper</button>
        </div>
)
}

export default Basics;



//use-effect

//Use effect helps us to run a portion of code.
//But only on specific render or reload
//Rather than everytime