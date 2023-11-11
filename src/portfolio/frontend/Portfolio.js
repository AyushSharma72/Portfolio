import React from "react"
import "./PortFolio.css"
import "./responsive.css"
import backimage from "./assets/smooth-gray-background.jpg"
import { Link } from "react-router-dom"
import Crousal from "./crousal"
function Portfolio() {


    // function Downloaded() {
    //     const message = setInterval(() => {
    //         alert("Resume Downloaded Succesfully")
    //         clearInterval(message);
    //     }, 2000)

    // }
    return (


        <div className="AboutMeParent">
            <div className="Projects">
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <h1 className="Color" style={{ fontWeight: "700" }}>Projects</h1>
                </div>
                <Crousal/>
              
            </div>

            <div className="Experience">
                <div className="ExpHeading"><h1 className="Color">Experience</h1></div>

                <ul className="ListofExp">
                    <div className="ExperienceDivs"><li>Intern at Indore Muncipal Corporation's IT Department </li>
                        <Link to="/MuncipleCertificate"><button className="Button">View Certificate</button></Link>
                    </div>
                    <div className="ExperienceDivs" style={{ gap: "7%" }}><li>Completed Web Development Internship from Technohacks</li>
                        <Link to="/TechnoCertificate"><button className="Button">View Certificate</button></Link>
                    </div>
                    <div className="ExperienceDivs" style={{ gap: "6.8%" }}><li>Completed Web Development Internship from Bharat Intern</li>
                        <Link to="/BharatCertificate" ><button className="Button">View Certificate</button></Link>
                    </div>
                </ul>

            </div>
            <div className="Resume">
                <div style={{ width: "80%", display: "flex" }}> <h1 className="Color">Download Resume</h1>
                </div>
                <div style={{ color: "white", width: "80%", display: "flex", gap: "1rem", marginTop: "1rem",alignItems:"start",flexDirection:"column",justifyContent:"start" }} >
                    {/* <button className="Button" onClick={Downloaded} ><a href="/Unavailable" download="Resume" style={{ color: "black", textDecoration: "none" }} >Download</a></button> */}
                    <button className="Button"  disabled ><a href="/Unavailable" style={{ color: "black", textDecoration: "none" }}>Download</a></button><p style={{color:"red"}}>Resume Currently Unavailable</p>
                </div>

            </div>
            <style>
                {`
          body {
            background-image: url(${backimage});
           
          }
        `}
            </style>
        </div>

    )
}
export default Portfolio;