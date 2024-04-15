import React,{useState} from "react";


const Form1=()=>{
    const[text,setText]=useState("")
   console.log("text",text)

    function getValue(event){
        setText(event.target.value)//swati
    }


    return(
        <div>
            <form>
                <input type="text" placeholder="Type anything...." onChange={getValue} />
            </form>
            <p>{text}</p>//swati
        </div>
    )
}

export default Form1;