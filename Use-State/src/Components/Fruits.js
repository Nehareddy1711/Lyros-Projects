import React,{useState} from "react"

const Fruits=()=>{
    const[fruits,setfruits]=useState(["apple","banana","orange"])
    const[newFruit,setNewFruit]=useState("")

    console.log(fruits)

     function updateFruits(e){
        e.preventDefault()
        setfruits(([...fruits,newFruit]))
        setNewFruit("")

     }


    return(
    <div>
    <form onSubmit={updateFruits}>
        <input type="text" placeholder="Enter a fruit" 
        onChange={e=>setNewFruit(e.target.value)}
        value={newFruit}
        
        /><br></br><br></br>
        <button type="submit">Submit</button>
    </form>
      {/* lets display arr here */}
      <ol>
      {
        fruits.map((fruit,index) => <li key={index}>{fruit}</li>)
      }
      </ol>
    </div>
    )

}

export default Fruits;