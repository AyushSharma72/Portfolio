import React from "react"
import "./PortFolio.css"
import "./responsive.css"
import Techno from "./assets/technohacks certificate.png"
function TechnoCertificate(){
    return (
        <div style={{display:"flex",justifyContent:"center"}}> 
          <img src={Techno} className="CertificateStyle"></img>
        </div>
    )
}
export default TechnoCertificate;