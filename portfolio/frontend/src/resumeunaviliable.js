import React from "react"
import backimage from "./assets/smooth-gray-background.jpg"
function Resume(){
    return(
        <div>
            <h2 style={{color:"red",marginTop:"10rem",textAlign:"center"}}>Resume is unavaliable</h2>
            <style>
          {`
          body {
            background-image: url(${backimage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height:80vh;
            width: 100%;
          }
        `}
        </style>
        </div>
    )
}
export default Resume;