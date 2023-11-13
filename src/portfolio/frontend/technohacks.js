import React from "react"
import {Link} from "react-router-dom"
import "./PortFolio.css"
import "./responsive.css"
import Techno from "./assets/technohacks certificate.png"
function TechnoCertificate(){
    return (
        <div className="IMCcertificateparent2"> 
          <img src={Techno} className="CertificateStyle"></img>
         <button className="Button"><Link to="/Portfolio" style={{textDecoration:"none",color:'black'}}>Go Back</Link></button>
        </div>
    )
}
export default TechnoCertificate;