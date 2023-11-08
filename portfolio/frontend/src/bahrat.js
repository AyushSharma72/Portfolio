import React from "react"
import Bharat from "./assets/baharat.jpg"
import "./PortFolio.css"
import "./responsive.css"
function BharatCertificate(){
    return (
        <div style={{display:"flex",justifyContent:"center"}}> 
          <img src={Bharat} className="CertificateStyle"></img>
        </div>
    )
}
export default BharatCertificate;