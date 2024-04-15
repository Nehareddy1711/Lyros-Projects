import React from "react"; 


// In this component we will try to update a normal js variable and see the issues

const State1 = ()=>{
  
    let a = 10

    function incA(){
        a = a+1 // this value is inc, 10,11,12, son on
        console.log(a) // 10,11,12...
    }

    return(
        <div>
           <h1>{a}</h1> 
           {/* // but this ia always 10 as it doesnot know `a` was updated */}
           <button onClick={incA}> Increase A</button> 
           {/* // our expecation will be if we click on this button 
           // value of a should inc right? */}
        </div>
    )
}

export default State1

// steps: 
// 1: You click on the button 
// 2: button will call the function incA, so incA function will load
// 3: what about h1? is h1 getting loaded again?
// 4: if h1 is not loading so what would happen => h1 will still hold older values

//Conclusion: 

// If we are using normal vairable variables are getting updated but the updat is not able to transfer to all parts of code as all parts of code is not loading again