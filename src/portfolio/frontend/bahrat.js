import React from "react"
import {Link} from "react-router-dom"
import Bharat from "./assets/baharat.jpg"
import "./PortFolio.css"
import "./responsive.css"
function BharatCertificate(){
    return (
        <div className="IMCcertificateparent2"> 
          <img src={Bharat} className="CertificateStyle"></img>
          <button className="Button"><Link to="/Portfolio" style={{textDecoration:"none",color:'black'}}>Go Back</Link></button>

        </div>
    )
}
export default BharatCertificate;