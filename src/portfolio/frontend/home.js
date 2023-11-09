import React from "react"
import Ayush from "./assets/ayushsharma.jpg"
import backimage from "./assets/backimage.jpg"
import { Link } from "react-router-dom"
import "./PortFolio.css"
import "./responsive.css"
function Home() {
  return (

    <div className="HomeParentDiv">
      <div className="HomeRightSection">
        <img src={Ayush} className="Myimage" ></img>
      </div>
      <div className="HomeLeftSection">
        <h4 >Hello,</h4>
        <h1>I'm <span className="Color">Ayush</span></h1> <h1 > Aspiring MERN Stack <span className="Color">Web Developer</span></h1>
        <p style={{ marginBottom: "0%" }}>I am skilled and passionate web developer currently pursuing Masters of computer applications</p>
        <p>Integrated from DAVV University, Indore</p>
        <Link to="/About"><button className="Button" style={{ backgroundColor: "cyan" }}>About Me</button></Link>
      </div>
      {/* <style>
          {`
          body {
            background-image: url(${backimage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height:100%;
            width: 100%;
          }
        `}
        </style> */}
    </div>


  )
}

export default Home;