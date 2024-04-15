import React,{useState} from "react";


const Form2=()=>{
    const[text,setText]=useState("")
    const[btnClick,setBtnClick]=useState("")

    function implementSubmit(event){
        event.preventDefault()//to prevent the default behaviour of the form

        // setBtnClick(true)
        setBtnClick(text)
        setText("")



    }


    return(
        <div>
            <form onSubmit={implementSubmit}>

                <input type="text" placeholder="Type anything...." 
                onChange={e=>{setText(e.target.value)
                    setBtnClick("")
                
                }}
                value={text}
                />
                <br></br><br></br>
                <button type="submit">Submit</button>
            </form>

           <p>{btnClick}</p>
            
        </div>
    )
}
export default Form2