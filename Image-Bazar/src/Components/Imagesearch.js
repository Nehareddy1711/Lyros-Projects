import React,{useState} from "react";
import axios from "axios";



const ImageSearch= ({setImages})=>{
    const[searchTerm,setSearchTerm]=useState("")
     
   async function fetchImages(e){
        e.preventDefault()
    
     try{
       const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            "Accept-version":"v1",
            "Authorization":"Client-ID 2ysysvvaDz31kInZ_bf8ANlsKlwR0wOojKmN2ZRzodI"
        },
        params:{
            query:searchTerm
        }
    })
    console.log(response.data.results)
    setImages(response.data.results)

}
catch(error){
    console.log(error)
}
}
     
    return(

    <div>
        <form>
            <input type="text" placeholder="Enter Search..."
             onChange={e => setSearchTerm(e.target.value)}
             value ={searchTerm}
            />
            <button onClick={fetchImages}>Search</button>

        </form>
    </div>
    )
}

export default ImageSearch