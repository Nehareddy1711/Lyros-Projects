import React, { useState } from "react";
import ImageSearch from "./Components/Imagesearch";
import ImageList from "./Components/ImageList";
const App=()=>{
    const[images,setImages]=useState([])
      console.log(images)
      return(
        <div>
            <ImageSearch setImages={setImages}/>
             <ImageList  images={images}/>
        </div>
             
    )
    
}

export default App