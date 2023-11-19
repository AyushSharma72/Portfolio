import React from "react"
import Ayush from "./assets/ayushsharma.jpg"
import { Link } from "react-router-dom"
import "./PortFolio.css"
import "./responsive.css"
function Home() {
  return (

    <div className="HomeParentDiv">
      <div className="HomeRightSection">
        <img src={Ayush} className="Myimage"  alt="Ayush"  loading="lazy"></img>
      </div>
      <div className="HomeLeftSection">
        <h4 >Hello,</h4>
        <h1>I'm <span className="Color">Ayush</span></h1> <h1 > Aspiring MERN Stack <span className="Color">Web Developer</span></h1>
        <p style={{ marginBottom: "0%" }}>I am skilled and passionate web developer currently pursuing Masters of computer applications</p>
        <p>Integrated from DAVV University, Indore</p>
        <Link to="/About"><button className="Button" style={{ backgroundColor: "cyan" }}>About Me</button></Link>
      </div>
    </div>


  )
}

export default Home;