import React from "react"
import IMC from "./assets/IMC.jpg"
import "./PortFolio.css"
import "./responsive.css"
function IMCCertificate(){
    return (
        <div className="IMCcertificateparent"> 
          <img src={IMC}  className="IMCcertificate"></img>
        </div>
    )
}
export default IMCCertificate;