import React from "react"
import IMC from "./assets/IMC.jpg"
import "./PortFolio.css"
import "./responsive.css"
import { HiExternalLink } from "react-icons/hi"
function IMCCertificate() {
  return (
    <div className="CERTIFICATE">
      <div className="IMCcertificateparent">
        <img src={IMC} className="IMCcertificate"></img>
        <div className="font" ><h4 >In the course of this internship</h4>
          <h4>I with my team developed a  <span className="Color">lucky draw system</span></h4>
          <h4>which generated random winners name from </h4>
          <h4>the database of <span className="Color">INDORE MUNCIPLE COOPORATION</span></h4>
          <p>LinkedIn post link <a href="https://www.linkedin.com/posts/ayush-sharma-a155a8267_intership-imc-activity-7124027220016193536-o7Mo?utm_source=share&utm_medium=member_desktop"><HiExternalLink /></a></p>
        </div>
      </div>
    </div>
  )
}
export default IMCCertificate;