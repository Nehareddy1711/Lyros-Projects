import React, {useState} from "react";
import axios from "axios";

const ImageList=({images})=>{
      console.log(images)
    return(
        <div>
            {
              images &&  images.length>0 &&
               images.map(value => (
                    <img src={value.urls.thumb} alt={value.alt_description}/>
                ))
            }
        </div>
    )
}

export default ImageList;