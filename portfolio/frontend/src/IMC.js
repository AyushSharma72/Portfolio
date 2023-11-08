import React from "react"
import IMC from "./assets/IMC.jpg"
import "./PortFolio.css"
import "./responsive.css"
function IMCCertificate(){
    return (
        <div style={{display:"flex",justifyContent:"center"}}> 
          <img src={IMC}  className="IMCcertificate"></img>
        </div>
    )
}
export default IMCCertificate;