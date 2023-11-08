import React from "react"
import "./PortFolio.css"
import "./responsive.css"
import Mern from "./assets/MERN.jpeg"
import Design from "./assets/design.png"
import backimage  from "./assets/top-view-desk-dark-concept-with-copy-space.jpg"
import Languages from "./assets/languages.jpeg"
import { BiSolidUserCircle } from "react-icons/bi"
import { FaLocationDot } from "react-icons/fa6"
import { FaUserGraduate } from "react-icons/fa"
function AboutMe() {
    return (
        <div >
            <div className="AboutMe">
                <div className="aboutContent" >
                    <div className="Whatido"> <h1 className="Color">About <span className="Color2"> Me</span></h1></div>

                    <div className="AboutMePara">
                        <span className="AboutmeSpan" >Hello, I'm <b>Ayush Sharma</b>, and I'm passionate about creating exceptional web applications using the <b>MERN</b> stack.
                            Still learning and creating more Projects , I love bringing innovative ideas to life through code.
                            Currently pursuing <b>Masters of computer applications Integrated from DAVV University, Indore</b></span>
                    </div>
                </div>

                <div className="Skills">
                    <div className="MERN">

                        <img src={Mern} style={{ width: "5rem" }}></img>

                        <div className="AboutusContent">

                            <h2>MERN STACK DEVELOPMENT</h2>
                            <p>I can develop full stack websites using MERN</p>

                        </div>

                    </div>

                    <div className="WebDesign">
                        <img src={Design} style={{ width: "5rem" }}></img>

                        <div className="AboutusContent">

                            <h2>WEBSITE DESIGN</h2>
                            <p>Proficient web designer  delivering visually appealing and user-friendly websites.</p>

                        </div>
                    </div>

                    <div className="LanguagesKnown">
                        <img src={Languages} style={{ width: "5rem", height: "4rem" }}></img>
                        <div className="AboutusContent">

                            <h2>LANGUAGES AND DATABASE KNOWLEDGE</h2>
                            <div style={{ display: "flex" }} className="LanguagesList"> <ul><li>React.js</li><li>Node.js</li><li>Java</li></ul> <ul><li>Python</li><li>Mongodb</li><li>Mysql</li></ul></div>

                        </div>
                    </div>

                </div>

                <div className="PersonalInfo">
                    <h2 className="Pinfoheading Color" >Personal Information</h2>
                    <div className="Name"><BiSolidUserCircle style={{ color: "white" }} /><span className="font">Ayush Sharma</span></div>

                    <div className="Address"><FaLocationDot className="LocationSymbol" /> <span className="font">161 A, near bapat square sukhliya Indore(Madhya Pradesh, India)</span> </div>

                    <div className="Education">
                        <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", height: "100%",justifyContent:"flex-start"}}><FaUserGraduate style={{ color: "white"}} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}><span className="font"><b>Schooling: </b><b>Kendriya Vidhalaya No 1,Indore </b>- All India Senior Secondary Certification Examination(April 2020 - March 2021-  (88%)). </span>
                            <span className="font"><b>Higher Education:</b> <b>Bachelor's in Computer Applications from IIPS DAVV </b>, Indore (NOVEMBER 2021 -PRESENT).</span>
                        </div>

                    </div>
                </div>
            </div>
            <style>
        {`
          body {
            background-image: url(${backimage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            height: 100%;
            width: 100%;
          }
        `}
        </style>
        </div>
    )
}
export default AboutMe